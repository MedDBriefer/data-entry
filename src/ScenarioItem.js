const ScenarioItem = (props) => {
    return (
        <div className='list-item new-check-item'>
            <label htmlFor='input_text'>Item Label:</label>
            <input type='text' className='item-input label-input' id={`input_text_${props.itemNum}`} name={`input_text_${props.itemNum}`}></input>
            <label htmlFor='type'>Item Type:</label>
            <select id='type' name='type'>
                <option value='assess'>Assess</option>
                <option value='action'>Action</option>
                <option value='interv'>Intervention</option>
            </select>
        </div>
    );
}

export default ScenarioItem;