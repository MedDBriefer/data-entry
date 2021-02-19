const BasicInfo = (props) => {
    return (
        <div id='basic-info' className='info-wrapper'>
            <div id='scenario-type'>
                <label>
                    Trauma <input type='radio' id='info-type-trauma' name='scenario-type' value='trauma'></input>
                </label>
                <label>
                    Medical <input type='radio' id='info-type-medical' name='scenario-type' value='medical'></input>
                </label>
            </div>

            <label id='info-scenario-title'>
                Scenario Title: <input type='text'></input>
            </label>

            <label id='info-instructor-info'>
                Instructor Info: <input type='text'></input>
            </label>

            <label id='info-dispatch-info'>
                Dispatch Info: <input type='text'></input>
            </label>

            <label id='info-scene-assessment'>
                Scene assessment: <input type='text'></input>
            </label>

            <label id='info-max-time'>
                Maximum time for scenario: <input type='number' placeholder='minutes'></input>
            </label>
            
            <label id='info-patient-info'>
                Patient Info: <input type='text'></input>
            </label>
        </div>
    );
}

export default BasicInfo;