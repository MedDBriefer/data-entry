const BasicInfo = (props) => {
    return (
        <div id="basic-info" className="info-wrapper">
            <h1>Basic Information:</h1>
            <label>
                Scenario Title: <input id="basicinfo-id" type="text"></input>
            </label>

            <label>
                Instructor Info: <textarea id="info-instructorInformation"></textarea>
            </label>

            <label>
                Dispatch Info: <textarea id="info-dispatchInfo"></textarea>
            </label>

            <label>
                Scene assessment: <textarea id="info-sceneAssessment"></textarea>
            </label>

            <label>
                Maximum time for scenario: <input id="info-maxTime" type="number" placeholder="minutes"></input>
            </label>
            
            <label>
                Patient Info: <textarea id="info-patientInformation"></textarea>
            </label>
        </div>
    );
}

export default BasicInfo;