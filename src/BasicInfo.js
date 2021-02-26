const BasicInfo = (props) => {
    return (
        <div id="basic-info" className="info-wrapper">
            <h1>Basic Information:</h1>
            <label>
                Scenario Title: <input id="basicinfo-name" type="text"></input>
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

            <h2>Patient Info:</h2>
            <div id='pt-info'>
                <label>
                    Moulage: <input type="text" id="info-pt-moulage"></input>
                </label>
                <label>
                    Position: <input type="text" id="info-pt-position"></input>
                </label>
                <label>
                    Actions: <input type="text" id="info-pt-actions"></input>
                </label>
            </div>
        </div>
    );
}

export default BasicInfo;