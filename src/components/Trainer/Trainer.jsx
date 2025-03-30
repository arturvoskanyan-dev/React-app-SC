import TrainerItem from "./TrainerItem/TrainerItem"
import NavBtn from "../NavBtn/NavBtn"
import "./Trainer.css"

function Trainer({trainers, trainersRef}) {
  return (
    <div className="trainer" ref={trainersRef}>
        <div className="trainer-title">
            <h2>Դասընթաց<span>ավարներ</span></h2>
            <p>Մեր փորձառու մասնագետները կմատուցեն Ձեզ բարդ թվացող ինֆորմացիան բավականին պարզեցված տեսքով:</p>
        </div>
        <div className="trainer-box">
            <div className="trainer-info">
                <TrainerItem trainers={trainers} />
            </div>
        </div>
        <div className="trainer-btn">
            <NavBtn />
        </div>
    </div>
  )
}

export default Trainer