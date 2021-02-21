const Sample = (props) => {
    return (
        <div className="info-box" id="sample">
            <h1>SAMPLE:</h1>
            
            <div className="sample">
                <label>
                    S: <input type="text" id="sample-S"></input>
                </label>
                <label>
                    A: <input type="text" id="sample-A"></input>
                </label>
                <label>
                    M: <input type="text" id="sample-M"></input>
                </label>
                <label>
                    P: <input type="text" id="sample-P"></input>
                </label>
                <label>
                    L: <input type="text" id="sample-L"></input>
                </label>
                <label>
                    E: <input type="text" id="sample-E"></input>
                </label>
            </div>
        </div>
    );
}

export default Sample;