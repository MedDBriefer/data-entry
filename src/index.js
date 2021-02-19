import React from 'react';
import ReactDOM from 'react-dom';
import ScenarioInfo from './ScenarioInfo.js';
import ScenarioItem from './ScenarioItem.js';
import './App.scss';

const traumaSteplist = require('./data/trauma-scenario.json');

let formOutput = require('./data/form-output.json');

class ScenarioForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };

    handleUpdate(e) {
        let input = e.target.value;
        let root = e.target.id.split('-')[0];
        let id, type;

        if(input === '') input = 'Unremarkable';

        switch(root) {
            case 'findings': 
                id = e.target.id.split('findings-')[1];
                formOutput.assessmentFindings[id] = input;

                break;
            case 'type': 
                id = e.target.id.split('type-')[1];
                formOutput.interventions[id] = input;

                break;
            case 'info': 
                id = e.target.id.split('info-')[1];

                break;
            case 'vitals': 
                id = e.target.id.split('-');
                type = id[1];
                let vital = id[2];

                if (type === 'initial')
                    formOutput.initialVitalSigns[vital] = input;
                else if (type === 'good') 
                    formOutput.reassessmentVitals[vital].goodVitals = input;
                else
                    formOutput.reassessmentVitals[vital].badVitals = input;
                    
                break;
            case 'sample': 
                id = e.target.id.split('sample-')[1].toUpperCase();
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

    componentDidMount(e) {
        // Import scenario data
        let scenarioData = [];
        traumaSteplist.forEach((item) => {
            scenarioData.push( <ScenarioItem item={item} /> );
        });

        this.setState({
            data: scenarioData,
        });
    }

    render() {
        return (
            <form id='scenario-form' className='scenario-form' onChange={this.handleUpdate} action=''>
                <ScenarioInfo />

                <fieldset id='scenario-steps'>
                    <legend>Scenario Items</legend>
                    <div className='steplist-wrapper' id='step-data'>
                        {this.state.data}
                    </div>
                </fieldset>

                <button type='button' id='submit-next' onClick={this.submitForm}>Next →</button>
            </form>
        );
    }
}

ReactDOM.render(
    <ScenarioForm />,
    document.getElementById('root')
  );