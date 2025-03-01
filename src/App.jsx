import './App.css'
import Nav from "./components/Nav/Nav.jsx"
import Main from './components/Main/Main.jsx'
import Lessons from "./components/Lessons/Lessons.jsx"
import Features from './components/Features/Features.jsx'
import Trainer from './components/Trainer/Trainer.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Footer from './components/Footer/Footer.jsx'

function App({nav_item, info_icon, lessons, features, trainers, contact}) {
  return (
    <>
      <Nav nav_item={nav_item} />
      <Main info_icon={info_icon} />
      <Lessons lessons={lessons} />
      <Features features={features} />
      <Trainer trainers={trainers} />
      <AboutUs />
      <Footer info_icon={info_icon} nav_item={nav_item} contact={contact} />
    </>
  )
}

export default App
