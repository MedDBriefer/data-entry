const ScenarioHeader = (props) => {
    return (
        <div className='list-item new-header-item'>
            <label htmlFor='input_text'>Header Label:</label>
            <input type='text' className='label-input' id={`input_text_${props.itemNum}`} name={`input_text_${props.itemNum}`}></input>
        </div>
    );
}

export default ScenarioHeader;