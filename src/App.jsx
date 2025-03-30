import {Nav, Main, Lessons, Features, Trainer, AboutUs, Footer} from "./components/index"
import { useRef } from 'react'
import './App.css'

function App({nav_item, info_icon, lessons, features, trainers, contact}) {
  const lessonsRef = useRef(null);
  const featuresRef = useRef(null);
  const trainersRef = useRef(null);
  const aboutUsRef = useRef(null);

  const scroll = (navName) => {
    const refsObj = {
      "Դասընթացներ": lessonsRef,
      "Առավելություններ": featuresRef,
      "Թրեյներներ": trainersRef,
      "Մեր մասին": aboutUsRef
    }
    refsObj[navName]?.current?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <Nav nav_item={nav_item} scroll={scroll} />
      <Main info_icon={info_icon} />
      <Lessons lessons={lessons} lessonsRef={lessonsRef} />
      <Features features={features} featuresRef={featuresRef} />
      <Trainer trainers={trainers} trainersRef={trainersRef} />
      <AboutUs aboutUsRef={aboutUsRef} />
      <Footer info_icon={info_icon} nav_item={nav_item} contact={contact} />
    </>
  )
}

export default App
