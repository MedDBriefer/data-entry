const ScenarioItem = (props) => {
    return (
        <div className='new-check-item'>
            <label for='type'>New Item:</label>
            <select id='type' name='type'>
                <option value='assess'>Assess</option>
                <option value='action'>Action</option>
                <option value='interv'>Interv</option>
            </select>
            <label for='input_text'>Item label:</label>
            <input type='text' id={`input_text_${props.itemNum}`} name={`input_text_${props.itemNum}`}></input>
        </div>
    );
}

export default ScenarioItem;