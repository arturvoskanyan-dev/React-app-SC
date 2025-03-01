import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {arr, infoIcons, lessons, features, trainers, contact} from "./data/data.js"
import './index.css'

createRoot(document.getElementById('root')).render(
    <App nav_item={arr} info_icon={infoIcons} lessons={lessons} features={features} trainers={trainers} contact={contact} />
)

