const ScenarioItem = (props) => {
    return (
        <div className='check-item list-item'>
            <label >Item Label:
                <input type='text' className='item-input label-input'></input>
            </label>
            
            <label>Item Type:
                <select id='type'>
                    <option value='assess'>Assess</option>
                    <option value='action'>Action</option>
                    <option value='interv'>Intervention</option>
                </select>
            </label>
        </div>
    );
}

export default ScenarioItem;