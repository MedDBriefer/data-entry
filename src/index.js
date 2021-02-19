import React from 'react';
import ReactDOM from 'react-dom';
import ScenarioInfo from './ScenarioInfo.js';
import ScenarioItem from './ScenarioItem.js';
import './App.scss';

var traumaSteplist = require('./data/trauma-scenario.json');

class ScenarioForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            form : {
                id: null,
                scenarioType: null,
                info: {
                    instructorInformation: null,
                    patientInformation: {
                        moulage: null,
                        position: null,
                        actions: null,
                    },
                    dispatchInfo: null,
                    sceneAssessment: null,
                },
                assessmentFindings: {
                    "assess-scene-safety": null,
                    "assess-injury-mechanism": null,
                    "assess-num-patients": null,
                    "request-addl-help": null,
                    "verbalizes-patient-condition": null,
                    "determines-loc": null,
                    "determines-life-threats": null,
                    "assess-airway": null,
                    "assess-breathing": null,
                    "assess-ventilation": null,
                    "assess-pulse": null,
                    "assess-skin": null,
                    "assess-bleeding": null,
                    "assess-mouth-nose-face": null,
                    "assess-scape-ears": null,
                    "assess-perrl": null,
                    "assess-trachea": null,
                    "assess-jugular": null,
                    "assess-spine": null,
                    "inspects-chest": null,
                    "palpate-chest": null,
                    "auscultate-chest": null,
                    "assess-abdomen": null,
                    "assess-pelvis": null,
                    "assess-genitalia": null,
                    "assess-left-leg": null,
                    "assess-right-leg": null,
                    "assess-left-arm": null,
                    "assess-right-arm": null,
                    "assess-posterior-thorax": null,
                    "assess-lumbar-buttocks": null,
                },
                initialVitalSigns: {
                    BP: null,
                    P: null,
                    R: null,
                    Skin: null,
                    Spo2: null,
                    ETCO2: null,
                    GCS: null,
                    Glucose: null,
                    Pain: null,
                    Temp: null,
                },
                SAMPLE: {
                    S: null,
                    A: null,
                    M: null,
                    P: null,
                    L: null,
                    E: null,
                },
                reassessmentVitals: {
                    BP: {
                    "goodVitals": null,
                    "badVitals": null,
                    },
                    P: {
                    "goodVitals": null,
                    "badVitals": null,
                    },
                    R: {
                    "goodVitals": null,
                    "badVitals": null,
                    },
                    Skin: {
                    "goodVitals": null,
                    "badVitals": null,
                    },
                    Spo2: {
                    "goodVitals": null,
                    "badVitals": null,
                    },
                    ETCO2: {
                    "goodVitals": null,
                    "badVitals": null,
                    },
                    GCS: {
                    "goodVitals": null,
                    "badVitals": null,
                    },
                    Glucose: {
                    "goodVitals": null,
                    "badVitals": null,
                    },
                    Pain: {
                    "goodVitals": null,
                    "badVitals": null,
                    },
                    Temp: {
                    "goodVitals": null,
                    "badVitals": null,
                    }
                },
                interventions: {
                    "stabilizes-spine": null,
                    "manages-airway": null,
                    "oxygen-therapy": null,
                    "manage-breathing-injury": null,
                    "control-bleeding": null,
                    "control-shock": null,
                    "transport-priority": null,
                },
            },
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };

    handleUpdate(e) {
        // TODO 
        console.log(e);
    }

    submitForm(e) {
        this.forceUpdate();
        console.log(this.state.form);
        // TODO: actually connect to the firebase database
    }

    componentDidMount(e) {
        // Import scenario data
        let scenarioData = [];
        traumaSteplist.forEach((item) => {
            scenarioData.push( <ScenarioItem item={item} /> );
        });

        this.setState({
            data: scenarioData,
        });
    }

    render() {
        return (
            <form id='scenario-form' className='scenario-form' onChange={this.handleUpdate} action=''>
                <ScenarioInfo />

                <fieldset id='scenario-steps'>
                    <legend>Scenario Items</legend>
                    <div className='steplist-wrapper' id='step-data'>
                        {this.state.data}
                    </div>
                </fieldset>

                <button type='button' id='submit-next' onClick={this.submitForm}>Next →</button>
            </form>
        );
    }
}

ReactDOM.render(
    <ScenarioForm />,
    document.getElementById('root')
  );