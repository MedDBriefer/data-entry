const Vitals = (props) => {
    return (
        <div className='info-box'>
            <h3> {`${props.type[0].toUpperCase() + props.type.slice(1)} Vitals:`} </h3>

            <div className='vitals'>
                <label>BP:
                    <input id={`vitals-${props.type}-bp`} type='text'></input>
                </label>
                <label>Pulse:
                    <input id={`vitals-${props.type}-pulse`} type='text'></input>
                </label>
                <label>R:
                    <input id={`vitals-${props.type}-resp`} type='text'></input>
                </label>
                <label>Skin:
                    <input id={`vitals-${props.type}-skin`} type='text'></input>
                </label>
                <label>Sp02:
                    <input id={`vitals-${props.type}-sp02`} type='text'></input>
                </label>
                <label>ETC02:
                    <input id={`vitals-${props.type}-etco2`} type='text'></input>
                </label>
                <label>GCS:
                    <input id={`vitals-${props.type}-gcs`} type='text'></input>
                </label>
                <label>Glucose:
                    <input id={`vitals-${props.type}-glucose`} type='text'></input>
                </label>
                <label>Pain:
                    <input id={`vitals-${props.type}-pain`} type='text'></input>
                </label>
                <label>Temp:
                    <input id={`vitals-${props.type}-temp`} type='text'></input>
                </label>
            </div>
        </div>
    );
}

export default Vitals;