import ScenarioItem from './ScenarioItem.js';

const ScenarioForm = () => {
    return (
        <form className='scenario-form'>
            <ScenarioItem />
            <button onClick={(e)=>{e.preventDefault()}}>＋</button>
        </form>
    );
}

export default ScenarioForm;