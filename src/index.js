import React from 'react';
import ReactDOM from 'react-dom';
import ScenarioInfo from './ScenarioInfo.js';
import ScenarioItem from './ScenarioItem.js';
import scenarioData from './data/trauma-scenario.json';
import './App.scss';

let formOutput = require('./data/form-output.json');

// ID's of each HTML element are very specifically set.
// Do not change or it will break the form's saving.

class ScenarioForm extends React.Component {
    constructor(props){
        super(props);

        this.handleUpdate = this.handleUpdate.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };

    handleUpdate(e) {
        let input = e.target.value;
        let root = e.target.id.split('-')[0];
        let id, type;

        if (input === '') input = 'Unremarkable'; // Base case

        switch(root) {
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
                else
                    formOutput.reassessmentVitals[vital].badVitals = input;
                    
                break;
            case 'sample': 
                // SAMPLE!
                id = e.target.id.split('sample-')[1];
                formOutput.SAMPLE[id] = input;

                break;
            default: console.log('Error with root: ' + root);
        }

        //console.log(formOutput);
    }

    submitForm(e) {
        console.log(formOutput);
        // TODO: actually connect to the firebase database
    }

    render() {
        return (
            <form id="scenario-form" className="scenario-form" onChange={this.handleUpdate} action=''>
                <ScenarioInfo />

                <fieldset id="scenario-steps">
                    <legend>Scenario Items</legend>
                    <div className="steplist-wrapper" id="step-data">
                        {scenarioData.map(item => (
                            <ScenarioItem key={item.id} item ={item}/>
                        ))}
                    </div>
                </fieldset>

                <button type="button" id="submit-next" onClick={this.submitForm}>Next →</button>
            </form>
        );
    }
}

ReactDOM.render(
    <ScenarioForm />,
    document.getElementById('root')
  );