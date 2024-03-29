import React, { useState } from 'react';
import BasicInfo from './BasicInfo.js';
import Steplist from './Steplist.js';
import Vitals from './Vitals';
import Sample from './Sample.js';
import publishScenario from '../scripts/connect-firebase.js';
import '../styles/form-styles.scss';

let formOutput = require('../data/blank-trauma-form.json');

/************************ IMPORTANT!! ***************************
   ID's of each HTML input element are very specifically set.
   Do not change or it will break the form's saving.
*****************************************************************/

const ScenarioForm = (props) => {
    var editMode = props.editMode; // Handle editing of forms instead of just creating

    function handleUpdate(e) 
    {
        // console.log(e);
        let input = e.target.value; // Get user text input
        let root = e.target.id.split('-')[0]; // Type of input prefix
        let id, type; // utility assignment vars

        if (input === '') input = 'Unremarkable'; // Base case

        switch(root)
        {
            case 'findings': 
                // Assessment findings
                id = e.target.id.split('findings-')[1];
                formOutput.assessmentFindings[id] = input;

                break;
            case 'type': 
                // Intervention type
                id = e.target.id.split('type-')[1];
                formOutput.interventions[id] = input;

                break;
            case 'basicinfo':
                // id, scenario type
                id = e.target.id.split('basicinfo-')[1];
                formOutput[id] = input;
                
                break;
            case 'info': 
                // instructor info, patient info, dispatch info, scene assessment
                id = e.target.id.split('-');
                (id[1] === 'pt') 
                    ? formOutput.info.patientInformation[id[2]] = input
                    : formOutput.info[id[1]] = input;                  
                break;
            case 'vitals': 
                id = e.target.id.split('-');
                // Note if good/bad/init vitals & what type (BP/P/R)
                type = id[1];
                let vital = id[2];

                // Map vitals to correct places
                if (type === 'initial')
                    formOutput.initialVitalSigns[vital] = input;
                else if (type === 'good') 
                    formOutput.reassessmentVitals[vital].goodVitals = input;
                else // type === 'bad'
                    formOutput.reassessmentVitals[vital].badVitals = input;
                    
                break;
            case 'sample': 
                // SAMPLE!
                id = e.target.id.split('sample-')[1];
                formOutput.SAMPLE[id] = input;

                break;
            default: console.log('Error with root: ' + root);
        }
        //console.log(formOutput); // DEBUG
    }

    function submitForm(e) 
    {
        if(window.confirm('All empty items will be filled with default information. Are you sure you want to submit?'))
        {
            console.log(formOutput);
            // Actually connect to the firebase database
            publishScenario(formOutput);
        } else 
        {
            console.log('Submit cancelled.');
        }
    }

    // Tab state (current view)
    const [tab, setTab] = useState('basic-info');

    function updateView()
    {
        switch(tab)
        {
            case 'basic-info':
                return <BasicInfo />;
            case 'vitals':
                return <Vitals />
            case 'sample':
                return <Sample />
            case 'steplist':
                return <Steplist />
            default:
                console.log('Error switching tabs. Defaulting.');
                return <BasicInfo />;
        }
    }

    return (
        <>
            <nav id="tab-selector">
                <div type="button" className="tab-button" onClick={() => setTab('basic-info')}>Info</div>
                <div type="button" className="tab-button" onClick={() => setTab('sample')}>Sample</div>
                <div type="button" className="tab-button" onClick={() => setTab('vitals')}>Vitals</div>
                <div type="button" className="tab-button" onClick={() => setTab('steplist')}>Steplist</div>
                <button type="button" id="submit-next" onClick={() => submitForm()}>Submit →</button>
            </nav>
            <form id="scenario-form" className="scenario-form" onChange={(e) => handleUpdate(e)} action="">

                {// Switch the tab view based on the state of tabs
                    updateView()
                }
        
            </form>
        </>
    );

}

export default ScenarioForm;
