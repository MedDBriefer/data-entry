const CriticalCriteriaItem = (props) => {
    return (
        <div className='crit-item list-item'>
            <label>Item Label:
                <input type='text' className='label-input'></input>
            </label>
            
            <label>For:
                <input type='text' className='label-input'></input>
            </label>
        </div>
    );
}

export default CriticalCriteriaItem;