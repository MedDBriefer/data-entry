const ScenarioItem = (props) => {
    return (
        <div className='step-item'>
            <p>'{props.item.label}':</p> 

            <label>
                Intervention Type:
                <select id={`${props.item.id}-type`}>
                    <option value='na'>NA</option>
                    <option value='say'>Say</option>
                    <option value='do'>Do</option>
                </select>
            </label>

            <label>
                Callout: 
                <input type='text' id={`${props.item.id}-callout`} placeholder='optional'></input>
            </label>
        </div>
    );
}

export default ScenarioItem;