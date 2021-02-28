import ScenarioItem from './ScenarioItem.js';
import scenarioData from '../data/trauma-scenario.json';

const Steplist = (props) => {
    return (
        <div id="scenario-steps">
            <h1>Scenario Items</h1>
            {scenarioData.map(item => (
                <ScenarioItem key={item.id} item ={item}/>
            ))}
        </div>
    );
}

export default Steplist;