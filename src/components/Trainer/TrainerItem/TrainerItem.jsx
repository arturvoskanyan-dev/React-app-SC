import "./TrainerItem.css"


function TrainerItem({trainers}) {
  return (
    trainers.map((elem, index) => {
        return (
            <div className="trainer-item" key={index}>
                <img src={elem.img} />
                <h3>{elem.name}</h3>
                <p>{elem.theme}</p>
                <p>Trainer</p>
            </div>
        )
    })
  )
}

export default TrainerItem