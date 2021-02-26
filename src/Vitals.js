const Vitals = () => {
    return (
        <div className="info-box vitals">
            <VitalsBox type="init" />
            <VitalsBox type="good" />
            <VitalsBox type="bad" />
        </div>
    );
}

const VitalsBox = (props) => {
    let header;
    switch(props.type)
    {
        case 'init': header = "Initial"; break;
        case 'good': header = 'Good Reassessment'; break;
        case 'bad': header = 'Bad Reassessment'; break;
        default: console.log('Vitals header error.'); break;
    }

    return (
        // The &nbsp; character is a little fix for styling the input box while it's nested
        <div className="vital-wrapper">
            <h1> {`${header} Vitals:`} </h1>
            <div className="vitals-box">
                <label>BP:&nbsp; 
                    <input id={`vitals-${props.type}-BP`} type="text"></input>
                </label>
                <label>Pulse:&nbsp; 
                    <input id={`vitals-${props.type}-P`} type="text"></input>
                </label>
                <label>R:&nbsp; 
                    <input id={`vitals-${props.type}-R`} type="text"></input>
                </label>
                <label>Skin:&nbsp; 
                    <input id={`vitals-${props.type}-Skin`} type="text"></input>
                </label>
                <label>Sp02:&nbsp; 
                    <input id={`vitals-${props.type}-Spo2`} type="text"></input>
                </label>
                <label>ETC02:&nbsp; 
                    <input id={`vitals-${props.type}-ETCO2`} type="text"></input>
                </label>
                <label>GCS:&nbsp; 
                    <input id={`vitals-${props.type}-GCS`} type="text"></input>
                </label>
                <label>Glucose:&nbsp; 
                    <input id={`vitals-${props.type}-Glucose`} type="text"></input>
                </label>
                <label>Pain:&nbsp; 
                    <input id={`vitals-${props.type}-Pain`} type="text"></input>
                </label>
                <label>Temp:&nbsp; 
                    <input id={`vitals-${props.type}-Temp`} type="text"></input>
                </label>
            </div>
        </div>
    );
}

export default Vitals;