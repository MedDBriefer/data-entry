const ScenarioSubItem = (props) => {
    return (
        <div className='sub-item list-item'>
            <label >Sub-Item Label:
                <input type='text' className='item-input label-input'></input>
            </label>
            
            <label>Sub-Item Type:
                <select id='type'>
                    <option value='assess'>Assess</option>
                    <option value='action'>Action</option>
                    <option value='interv'>Intervention</option>
                </select>
            </label>

            <label >Callout:
                <input type='text'></input>
            </label>
        </div>
    );
}

export default ScenarioSubItem;