const BasicInfo = (props) => {
    return (
        <div id="basic-info" className="info-wrapper">
            <h1>Basic Information:</h1>
            <label>
                Scenario Title: <input id="basicinfo-id" type="text"></input>
            </label>

            <label>
                Instructor Info: <input id="info-instructorInformation" type="text"></input>
            </label>

            <label>
                Dispatch Info: <input id="info-dispatchInfo" type="text"></input>
            </label>

            <label>
                Scene assessment: <input id="info-sceneAssessment" type="text"></input>
            </label>

            <label>
                Maximum time for scenario: <input id="info-maxTime" type="number" placeholder="minutes"></input>
            </label>
            
            <label>
                Patient Info: <input id="info-patientInformation" type="text"></input>
            </label>
        </div>
    );
}

export default BasicInfo;