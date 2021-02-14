const BasicInfo = (props) => {
    return (
        <div id='basic-info' className='info-wrapper'>
            <div id='scenario-type'>
                <label>
                    Trauma <input type='radio' id='type-trauma' name='scenario-type' value='trauma'></input>
                </label>
                <label>
                    Medical <input type='radio' id='type-medical' name='scenario-type' value='medical'></input>
                </label>
            </div>

            <label id='scenario-title'>
                Scenario Title: <input type='text'></input>
            </label>

            <label id='instructor-info'>
                Instructor Info: <input type='text'></input>
            </label>

            <label id='dispatch-info'>
                Dispatch Info: <input type='text'></input>
            </label>

            <label id='scene-assessment'>
                Scene assessment: <input type='text'></input>
            </label>

            <label id='max-time'>
                Maximum time for scenario: <input type='text'></input>
            </label>
            
            <label id='patient-info'>
                Patient Info: <input type='text'></input>
            </label>
        </div>
    );
}

export default BasicInfo;