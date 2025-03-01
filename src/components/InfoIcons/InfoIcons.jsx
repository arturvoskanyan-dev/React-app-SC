import "../InfoIcons/InfoIcons.css"

function InfoIcons({info_icon}) {
    return (
        <div className="info-icons">
            {
                info_icon.map((elem, index) => {
                    return (
                        <div className="info-icon" key={index}>
                            <img src={`public/${elem}.png`} />
                        </div>
                    )
                })
            }
        </div> 
    )
}

export default InfoIcons