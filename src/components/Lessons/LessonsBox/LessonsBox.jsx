import "./LessonsBox.css"

function LessonsBox({lessons}) {
    return (
        <>
            {
                lessons.map((elem, index) => {
                    return (
                        <div className="lesson-item" key={index}>
                            <img src={`https://smartcode.am/public/image/courses/${elem.img}.svg`} />
                            <h3>{elem.title}</h3>
                            <h4>Դասընթաց</h4>
                            <a href="">Դիտել</a>
                            <p>
                                <span>{elem.month}</span>
                                <span>{elem.money}</span>
                            </p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default LessonsBox