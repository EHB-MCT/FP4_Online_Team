import { Link } from 'react-router';

//Components
import Button from './Button.jsx';

const Footer = () => {

    return(
        <footer>
            <div className="footer-wrapper">
                <Link to='/' ><img src="./" alt="Logo of the event" /></Link>
                <p>Erasmus Hogeschool Brussel - 2025</p>
                <div className="footer-navigation-wrapper">
                    <a href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-en-creatieve-technologie">MCT - EHB</a>
                    <a href="https://www.instagram.com/multimedia.ehb/">Instagram</a>
                    <Button 
                        destinationUrl={"register"}
                        copy={"Inschrijven"}
                    />
                </div>
            </div>
            <Link to={"/policies/privacy"}>Privicy policy</Link>
            <Link to={"/policies/cookies"}>Cookies policy</Link>
        </footer>
    )

}

export default Footer;