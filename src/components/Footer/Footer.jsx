import NavLogo from "../Logo/Logo"
import MainText from "../MainText/MainText"
import InfoIcons from "../InfoIcons/InfoIcons"
import FooterContact from "./FooterContact/FooterContact"
import FooterCompany from "./FooterCompany/FooterCompany"
import "./Footer.css"

function Footer({info_icon, nav_item, contact}) {
    let company = [...nav_item, "Աշխատանք"]
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-box">
                    <NavLogo />
                    <MainText />
                    <InfoIcons info_icon={info_icon}/>
                </div>
                <div className="footer-box">
                    <h2>Ընկերություն</h2>
                    <FooterCompany company={company} />
                </div>
                <div className="footer-box">
                    <h2>Կապ մեզ հետ</h2>
                    <FooterContact contact={contact} />
                </div>
            </div>
        </div>
    )
}

export default Footer