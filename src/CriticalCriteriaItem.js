const CriticalCriteriaItem = (props) => {
    return (
        <div className='list-item new-crit-item'>
            <label htmlFor='input_text'>Item Label:</label>
            <input type='text' className='label-input' id={`input_text_${props.itemNum}`} name={`input_text_${props.itemNum}`}></input>
            <label htmlFor='input_text'>For:</label>
            <input type='text' className='label-input for' id={`input_text_${props.itemNum}`} name={`input_text_${props.itemNum}`}></input>
        </div>
    );
}

export default CriticalCriteriaItem;