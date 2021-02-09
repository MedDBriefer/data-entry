import VitalsInfo from './VitalsInfo.js';

const ScenarioInfo = (props) => {
    return (
        <fieldset id='scenario-info' className='scenario-info'>
            <legend>Scenario Info</legend>

            <div id='basic-info'>
                <label id='title'>Scenario Title: 
                    <input type='text'></input>
                </label>

                <div>
                    <label id='type'>Trauma
                        <input type='radio' name='scen-type' value='trauma'></input>
                    </label>
                    <label id='type'>Medical
                        <input type='radio' name='scen-type' value='medical'></input>
                    </label>
                </div>

                <label id='dispatch'>Dispatch Info: 
                    <input type='text'></input>
                </label>
                
            </div>

            <div id='secondary-info'>
                <VitalsInfo />
                <div id='sample'>
                    <p>SAMPLE</p>
                    <div className='info-box sample-history'>
                        <label>S:
                            <input type='text'></input>
                        </label>
                        <label>A:
                            <input type='text'></input>
                        </label>
                        <label>M:
                            <input type='text'></input>
                        </label>
                        <label>P:
                            <input type='text'></input>
                        </label>
                        <label>L:
                            <input type='text'></input>
                        </label>
                        <label>E:
                            <input type='text'></input>
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

export default ScenarioInfo;