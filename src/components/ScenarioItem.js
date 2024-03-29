const ScenarioItem = (props) => {
    return (
        (props.item.type === 'heading') 
        ? <ScenarioHeader item={props.item} />

        : <div className="step-item">
            {
                (props.item.type === 'assessment') 
                ?   <AssessmentFindings item={props.item} /> 
                :   <InterventionType item={props.item} />
            }
        </div>
    );
}

const ScenarioHeader = (props) => {
    return (
        <div className="list-item header-item">
            {props.item.label}
        </div>
    );
}

const InterventionType = (props) => {
    return (
        <label>
            {`'${props.item.label}':`}
            <select id={`type-${props.item.id}`}>
                <option value="na">NA</option>
                <option value="say">Say</option>
                <option value="do">Do</option>
            </select>
        </label>
    );
}

const AssessmentFindings = (props) => {
    return (
        <label>
            {`'${props.item.label}':`}
            <input type="text" id={`findings-${props.item.id}`} placeholder="leave blank if N/A or unremarkable"></input>
        </label>
    );
    
}

export default ScenarioItem;