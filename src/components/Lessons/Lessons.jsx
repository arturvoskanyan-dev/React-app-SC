import LessonsBox from "./LessonsBox/LessonsBox"
import "./Lessons.css"

function Lessons({lessons, lessonsRef}) {
    return (
        <div className="lessons" ref={lessonsRef}>
            <div className="lessons-text">
                <h2>Ծրագրավորման <span>դասընթացներ</span></h2>
                <p>Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>
            </div>
            <div className="lessons-menu">
                <div className="lessons-box">
                    <LessonsBox lessons={lessons}/>
                </div>
                <div className="lessons-img">
                    <img src="https://smartcode.am/public/image/per4.svg" />
                </div>
            </div>
        </div>
    )
}

export default Lessons