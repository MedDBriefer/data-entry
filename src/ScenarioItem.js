const ScenarioItem = (props) => {
    return (
        <div className='new-check-item'>
            <label htmlFor='type'>New Item:</label>
            <select id='type' name='type'>
                <option value='assess'>Assess</option>
                <option value='action'>Action</option>
                <option value='interv'>Intervention</option>
            </select>
            <label htmlFor='input_text'>Item Label:</label>
            <input type='text' className='label-input' id={`input_text_${props.itemNum}`} name={`input_text_${props.itemNum}`}></input>
        </div>
    );
}

export default ScenarioItem;