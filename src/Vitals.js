const Vitals = (props) => {
    return (
        <div className='info-box'>
            <h3> {`${props.type[0].toUpperCase() + props.type.slice(1)} Vitals:`} </h3>

            <div className='vitals'>
                <label>BP:
                    <input id={`${props.type}-bp`} type='text'></input>
                </label>
                <label>Pulse:
                    <input id={`${props.type}-pulse`} type='text'></input>
                </label>
                <label>R:
                    <input id={`${props.type}-resp`} type='text'></input>
                </label>
                <label>Skin:
                    <input id={`${props.type}-skin`} type='text'></input>
                </label>
                <label>Sp02:
                    <input id={`${props.type}-sp02`} type='text'></input>
                </label>
                <label>ETC02:
                    <input id={`${props.type}-etco2`} type='text'></input>
                </label>
                <label>GCS:
                    <input id={`${props.type}-gcs`} type='text'></input>
                </label>
                <label>Glucose:
                    <input id={`${props.type}-glucose`} type='text'></input>
                </label>
                <label>Pain:
                    <input id={`${props.type}-pain`} type='text'></input>
                </label>
                <label>Temp:
                    <input id={`${props.type}-temp`} type='text'></input>
                </label>
            </div>
        </div>
    );
}

export default Vitals;