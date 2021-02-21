const Vitals = () => {
    return (
        <div className="info-box">
            <VitalBox type="initial" />
            <VitalBox type="good" />
            <VitalBox type="bad" />
        </div>
    );
}

const VitalBox = (props) => {
    return (
        <div className="vitals-box">
            <h1> {`${props.type[0].toUpperCase() + props.type.slice(1)} Vitals:`} </h1>
            <label>BP:
                <input id={`vitals-${props.type}-BP`} type="text"></input>
            </label>
            <label>Pulse:
                <input id={`vitals-${props.type}-P`} type="text"></input>
            </label>
            <label>R:
                <input id={`vitals-${props.type}-R`} type="text"></input>
            </label>
            <label>Skin:
                <input id={`vitals-${props.type}-Skin`} type="text"></input>
            </label>
            <label>Sp02:
                <input id={`vitals-${props.type}-Spo2`} type="text"></input>
            </label>
            <label>ETC02:
                <input id={`vitals-${props.type}-ETCO2`} type="text"></input>
            </label>
            <label>GCS:
                <input id={`vitals-${props.type}-GCS`} type="text"></input>
            </label>
            <label>Glucose:
                <input id={`vitals-${props.type}-Glucose`} type="text"></input>
            </label>
            <label>Pain:
                <input id={`vitals-${props.type}-Pain`} type="text"></input>
            </label>
            <label>Temp:
                <input id={`vitals-${props.type}-Temp`} type="text"></input>
            </label>
        </div>
    );
}

export default Vitals;