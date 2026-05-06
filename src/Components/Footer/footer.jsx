import { Link } from "react-router-dom"
import "../../Components/Footer/footer.css"
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-head">
                    <h3 className="footer-title"> Partner </h3>
                    <ul className="logo-list">
                        <li> <img src="/Images/telekom.png" alt="telekom-logo" /> </li>
                        <li> <img src="/Images/adidas.png" alt="adidas-logo" /> </li>
                        <li> <img src="/Images/allArena.png" alt="allianz-logo" /> </li>
                        <li> <img src="/Images/audi.png" alt="audi-logo" /> </li>
                    </ul>
                </div>
                <div className="footer-content">
                    <div className="footer-left">
                        <img src="/Images/history.png" alt="historyYears-img" />
                        <p className="footer-desc"> <i className="bi bi-quote"></i> 125 Years of Legacy <i className="bi bi-quote"></i></p>
                    </div>
                    <div className="footer-centre">
                        <h4 className="title-links"> Clup </h4>
                        <ul className="footer-links">
                            <li> <Link to="/"> Home </Link> </li>
                            <li> <Link to="/trophies"> Trophies </Link> </li>
                            <li> <Link to="/gallery"> Gallery </Link> </li>
                            <li> <Link to="/contact"> Contact </Link> </li>
                        </ul>
                    </div>
                    <div className="footer-centre-right">
                        <h4 className="title-links"> Pages </h4>
                        <ul className="footer-links">
                            <li> <Link to="/team"> Team </Link> </li>
                            <li> <Link to="/matches"> Matches </Link> </li>
                            <li> <Link to="/news"> News </Link> </li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <h4 className="title-links"> Get in Touch </h4>
                        <p> <span> Email : </span> <a href="mailto:service@fcbayern.com"> service@fcbayern.com </a></p>
                        <p> <span> Phone : </span> <a href="tel:+4989699310"> +4989699310 </a> </p>
                        <p>
                            <span> Address : </span> Säbener straße 51-57 ,
                            Munich 81547 ,
                            Germany
                        </p>
                        <div className="footer-icons">
                            <a href="#"> <i className="bi bi-facebook"></i> </a>
                            <a href="#"> <i className="bi bi-instagram"></i> </a>
                            <a href="#"> <i className="bi bi-tiktok"></i> </a>
                            <a href="#"> <i className="bi bi-youtube"></i> </a>
                            <a href="#"> <i className="bi bi-whatsapp"></i> </a>
                            <a href="#"> <i className="bi bi-twitter-x"></i> </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p> &copy; Fc Bayern Munich - 2026 All right reserved </p>
                    <p className="designed"> Designed by <span> JAFAR </span> </p>
                </div>
            </footer>
        </>
    )
}

export default Footer