import React from 'react';
import ReactDOM from 'react-dom';
import ScenarioHeader from './ScenarioHeader.js';
import ScenarioItem from './ScenarioItem.js';
import ScenarioSubItem from './ScenarioSubItem.js';
import CriticalCriteriaItem from './CriticalCriteriaItem.js';
import './App.scss';

class ScenarioForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                <ScenarioHeader  />,
                <ScenarioItem  />
            ],
            critData : [
                <CriticalCriteriaItem />
            ],
        };

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        e.preventDefault();
        let data = this.state.data.slice();
        let critData = this.state.critData.slice();

        if(e.target.id === 'add-header-button'){
            data.push( <ScenarioHeader /> );
        } else if(e.target.id === 'add-item-button'){
            data.push( <ScenarioItem /> );
        } else if(e.target.id === 'add-sub-item-button'){
            data.push( <ScenarioSubItem /> );
        } else {
            critData.push( <CriticalCriteriaItem /> );
        }
        this.setState({
            data: data,
            critData: critData,
        });
    }

    render() {
        return (
            <form id='scenario-form' className='scenario-form'>
                <label id='title'>Scenario Title: 
                    <input type='text'></input>
                </label>

                <div className='form-content'>
                    <fieldset id='form-items'>
                        <legend>Scenario Items</legend>
                        {this.state.data}
                    </fieldset>

                    <div id='add-buttons'>
                        <button id='add-header-button' onClick={this.handleClick}>Add Header</button>
                        <button id='add-item-button' onClick={this.handleClick}>Add Item</button>
                        <button id='add-sub-item-button' onClick={this.handleClick}>Add Sub-Item</button>
                    </div>

                    <fieldset id="crit-items">
                        <legend>Critical Criteria</legend>
                        {this.state.critData}
                    </fieldset>

                    <button id='add-crit-item' onClick={this.handleClick}>Add Critical Item</button>
                </div>

                <button type='submit' id='submit-next'>Next →</button>
            </form>
        );
    }
}

ReactDOM.render(
    <ScenarioForm />,
    document.getElementById('root')
  );