import React from 'react';
import ReactDOM from 'react-dom';
import ScenarioInfo from './ScenarioInfo.js';
import ScenarioItem from './ScenarioItem.js';
import Intervention from './Intervention.js';
import './App.scss';

var traumaSteplist = require('./data/trauma-scenario.json');

class ScenarioForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : null,
            interventions : [],
            interventionCount : 0,
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.addIntervention = this.addIntervention.bind(this);
    };

    handleUpdate(e) {
        // TODO 
    }

    addIntervention(e) {
        e.preventDefault();
        let interventionCopy = this.state.interventions.slice();
        let intvntnCount = this.state.interventionCount;
        intvntnCount++;

        interventionCopy.push(<Intervention num={intvntnCount} />);
        this.setState({
            interventions: interventionCopy,
            interventionCount: intvntnCount,
        });
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
            <form id='scenario-form' className='scenario-form'>
                <ScenarioInfo />

                <fieldset id='scenario-steps'>
                    <legend>Scenario Items</legend>
                    <div className='steplist-wrapper' id='step-data'>
                        {this.state.data}
                    </div>
                </fieldset>

                <fieldset id='intervention-forms'>
                    <legend>Interventions</legend>

                    <div className='interventions-wrapper'>
                        {this.state.interventions}
                    </div>
                    
                    <button type='button' id='add-intervention' onClick={this.addIntervention}>Add Intervention</button>
                </fieldset>

                <button type='submit' id='submit-next'>Next →</button>
            </form>
        );
    }
}

ReactDOM.render(
    <ScenarioForm />,
    document.getElementById('root')
  );