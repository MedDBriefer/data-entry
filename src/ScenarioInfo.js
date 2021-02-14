import Vitals from './Vitals.js';
import SampleInfo from './Sample.js';
import BasicInfo from './BasicInfo.js';

const ScenarioInfo = (props) => {
    return (
        <fieldset id='scenario-info' className='scenario-info'>
            <legend>Scenario Info</legend>

            <BasicInfo />

            <div id='secondary-info' className='info-wrapper'>
                <div className='vitals-wrapper'>
                    <Vitals type='initial'/>
                    <Vitals type='good'/>
                    <Vitals type='bad'/>
                </div>
                <div className='sample-wrapper'>
                    <SampleInfo />
                </div>
            </div>
        </fieldset>
    );
}

export default ScenarioInfo;