import React from 'react';
import ReactDOM from 'react-dom';
import ScenarioInfo from './ScenarioInfo.js';
import ScenarioItem from './ScenarioItem.js';
import './App.scss';

var traumaSteplist = require('./data/trauma-scenario.json');

class ScenarioForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : null,
        };

        this.handleUpdate = this.handleUpdate.bind(this);
    };

    handleUpdate(e) {
        // TODO 
    }

    componentDidMount() {
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

                <button type='submit' id='submit-next'>Next →</button>
            </form>
        );
    }
}

ReactDOM.render(
    <ScenarioForm />,
    document.getElementById('root')
  );