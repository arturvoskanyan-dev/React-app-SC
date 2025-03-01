import NavBtn from "../NavBtn/NavBtn"
import FeaturesItem from "./FeaturesItem/FeaturesItem"
import "./Features.css"

function Features({features}) {
  return (
    <div className="features">
        <div className="features-title">
            <h2><span>Ինչո՞ւ սովորել</span> մեզ մոտ</h2>
            <p>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է</p>
        </div>
        <div className="features-box">
            <div className="features-img">
                <img src="https://smartcode.am/public/image/per2.svg" />
            </div>
            <div className="features-info">
                <FeaturesItem features={features}/>
            </div>
        </div>
        <div className="features-btn">
            <NavBtn />
        </div>
    </div>
  )
}

export default Features