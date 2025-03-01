import "./featuresItem.css"

function FeaturesItem({features}) {
  return (
    features.map((elem, index) => {
        return (
            <div className="features-info-item" key={index}>
                <p><img src={`../../public/${elem.icon}.png`} alt="" />{elem.title}</p>
                <p>{elem.info}</p>
            </div>
        )
    })
  )
}

export default FeaturesItem