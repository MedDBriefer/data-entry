const ScenarioItem = (props) => {
    return (
        (props.item.type === 'heading') ? 
            <ScenarioHeader item={props.item} /> :
        
        <div className='step-item'>
            <p>'{props.item.label}':</p> 

            {
            (props.item.type === 'assessment') ?
                <AssessmentFindings item={props.item} /> :
                <InterventionType item={props.item} />
            }
        </div>
    );
}

const ScenarioHeader = (props) => {
    return (
        <div className='list-item header-item'>
            {props.item.label}
        </div>
    );
}

const InterventionType = (props) => {
    return (
        <label>
            Intervention Type:
            <select id={`type-${props.item.id}`}>
                <option value='na'>NA</option>
                <option value='say'>Say</option>
                <option value='do'>Do</option>
            </select>
        </label>
    );
}

const AssessmentFindings = (props) => {
    return (
        <label>
            Assessment Findings: 
            <input type='text' id={`findings-${props.item.id}`} placeholder='blank if unremarkable'></input>
        </label>
    );
    
}

export default ScenarioItem;