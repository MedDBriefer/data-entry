import React from 'react';
let steps = require('./data/trauma-scenario.json');

class Intervention extends React.Component {
    constructor(props) {
        super(props);
        this.count = 1;

        this.state = {
            options: [
                <label>
                    Option {this.count}: <input id={`intervention-${this.props.num}-option-${this.count++}`} type='text'></input>
                </label>,
            ],
        };

        this.addOption = this.addOption.bind(this);
    }
    
    compnentDidMount(){
        let newSteps = [];

        steps.forEach((item) => {
            newSteps.push(item.id);
        });
        steps = newSteps;
    }

    addOption(){
        let options = this.state.options.slice();

        options.push(
            <label>
                Option {this.count}: <input id={`intervention-${this.props.num}-option-${this.count++}`} type='text'></input>
            </label>
        );

        this.setState({
            options: options,
        });
    }

    render() {
        return (
            <div id={`intervention-num-${this.props.num}`} className='intervention'>
                <div className='type-wrapper'>
                    <label>
                        Complete all<input type='radio' id={`intervention-${this.props.num}-and`} name={`intervention-${this.props.num}-type`} value='and'></input>
                    </label>
                    <label>
                        Complete one<input type='radio' id={`intervention-${this.props.num}-or`} name={`intervention-${this.props.num}-type`} value='or'></input>
                    </label>
                </div>

                <label>
                    Intervention Title: <input id={`intervention-${this.props.num}-title`} type='text'></input>
                </label>

                <label>
                    Parent step ID: <input id={`intervention-${this.props.num}-parent`} type='search' list='parent-ids'></input>
                </label>

                <div id={`intervention-${this.props.num}-options-list`} className='intervention-options'>
                    {this.state.options}
                </div>

                <button type='button' className='option-button' onClick={this.addOption}>Add option</button>
            </div>
        );
    }
}

export default Intervention;