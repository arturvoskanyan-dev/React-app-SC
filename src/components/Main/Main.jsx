import "../Main/Main.css"
import MainText from "../MainText/MainText.jsx"
import NavBtn from "../NavBtn/NavBtn.jsx"
import playBtn from "../../assets/play-button.png"
import InfoIcons from "../InfoIcons/InfoIcons.jsx"

function Main({info_icon}) {
    return (
        <div className="main">
            <div className="main-menu">
                <div className="main-header">
                    <h2>
                    Սովորի՛ր <span>ծրագրավորում</span><br/>
                    Դարձի՛ր <span>պահանջված մասնագետ</span>
                    </h2>
                </div>

                <MainText/>

                <div className="main-info">
                    <NavBtn/>
                    <a className="video-link"><img src={playBtn}/>Տեսանյութ</a>
                </div>
            </div>

            <InfoIcons info_icon={info_icon} />

            <div className="main-image">
                <img src="https://smartcode.am/public/image/header.svg"/>
            </div>
        </div>
    )
}

export default Main