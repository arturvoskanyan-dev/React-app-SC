import "./AboutUs.css"

function AboutUs({aboutUsRef}) {
  return (
      <div className="container" ref={aboutUsRef}>
          <div className="about-us">
            <div className="about-us-title">
                <h2><span>Մեր</span> մասին</h2>
                <p>Ընկերության գործունեության մասին</p>
            </div>
            <div className="about-us-box">
                <div className="about-us-info">
                    <p>SmartCode ծրագրավորման ուսուցման ընկերությունը արդեն 9 տարի է կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ, նպատակ ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ:</p>
                    <p>Հետևելով համաշխարհային IT թրենդներին՝ թարմացվում և կատարելագործվում են դասավանդման ծրագրերը: Հատուկ մշակված ծրագրի արդյունքում մեր ուսանողները գրանցում են մեծ հաջողություններ: Հմուտ մասնագետների աշխատանքի արդյունքում մենք վայելում ենք մեր ուսանողների սերն ու վստահությունը:</p>
                    <p>Դու էլ միացի՛ր մեզ, դարձի՛ր մրցունակ ծրագրավորման ոլորտում SmartCode-ի օգնությամբ:</p>
                </div>
                <div className="about-us-img">
                    <img src="https://smartcode.am/public/image/per3.svg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs