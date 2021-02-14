const SampleInfo = (props) => {
    return (
        <div className='info-box' id='sample'>
            <h3>SAMPLE:</h3>
            
            <div className='sample'>
                <label>
                    S: <input type='text' id='sample-s'></input>
                </label>
                <label>
                    A: <input type='text' id='sample-a'></input>
                </label>
                <label>
                    M: <input type='text' id='sample-m'></input>
                </label>
                <label>
                    P: <input type='text' id='sample-p'></input>
                </label>
                <label>
                    L: <input type='text' id='sample-l'></input>
                </label>
                <label>
                    E: <input type='text' id='sample-e'></input>
                </label>
            </div>
        </div>
    );
}

export default SampleInfo;