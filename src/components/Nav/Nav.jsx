import NavLogo from "../Logo/Logo.jsx"
import "./Nav.css"
import NavItem from "./NavItem/NavItem.jsx"
import NavBtn from "../NavBtn/NavBtn.jsx"
import MediaMenuBtn from "./MediaMenuBtn/MediaMenuBtn.jsx"

function Nav({nav_item}) {
    return (
        <div className="nav">
            <NavLogo />
            <NavItem nav_item={nav_item} />
            <NavBtn />
            <MediaMenuBtn />
        </div>
    )
}

export default Nav