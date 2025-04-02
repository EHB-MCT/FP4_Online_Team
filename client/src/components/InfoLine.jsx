const InfoLine = ( { icon, copy } ) => {
    return(
        <div className="info-line" id="date">
            <img src={ icon } alt="icon" />
            <p>{ copy }</p>
        </div>
    )

}

export default InfoLine