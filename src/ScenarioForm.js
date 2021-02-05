import ScenarioItem from './ScenarioItem.js';

const ScenarioForm = () => {
    return (
        <form className='scenario-form'>
            <ScenarioItem />
            <button>＋</button>
        </form>
    );
}

export default ScenarioForm;