import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import BasicInfo from './BasicInfo.js';
import Steplist from './Steplist.js';
import Vitals from './Vitals';
import Sample from './Sample.js';
import './App.scss';

let formOutput = require('./data/form-output.json');

// ******************** IMPORTANT!! ************************
// ID's of each HTML element are very specifically set.
// Do not change or it will break the form's saving.

const ScenarioForm = () => {
    function handleUpdate(e) {
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
                id = e.target.id.split('info-')[1];
                formOutput.info[id] = input;

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

    function submitForm(e) {
        console.log(formOutput);
        // TODO: actually connect to the firebase database
    }

    const [tab, setTab] = useState('basic-info');

    return (
        <form id="scenario-form" className="scenario-form" action="">

            <div id="tab-selector">
                <button type="button" className="tab" onClick={() => setTab('basic-info')}>Info</button>
                <button type="button" className="tab" onClick={() => setTab('vitals')}>Vitals</button>
                <button type="button" className="tab" onClick={() => setTab('sample')}>Sample</button>
                <button type="button" className="tab" onClick={() => setTab('steplist')}>Steplist</button>
            </div>

            <div id="form-view" onChange={(e) => handleUpdate(e)}>
                {(tab == 'basic-info')
                    ?   <BasicInfo />
                    :   (tab == 'vitals')
                        ?   <Vitals />
                        :   (tab == 'sample')
                            ?   <Sample />
                            :   <Steplist />
                }
            </div>
            
            <button type="button" id="submit-next" onClick={() => submitForm()}>Next →</button>
        </form>
    );

}

ReactDOM.render(
    <ScenarioForm />,
    document.getElementById('root')
);