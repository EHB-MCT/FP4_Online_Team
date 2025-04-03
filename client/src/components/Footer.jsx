import { Link } from 'react-router';
import Image from '../../public/logo-placeholder-image.png';

//Components
import Button from './Button.jsx';

const Footer = () => {

    return(
        <footer>
            <div className="inner-wrapper">
                <div className="footer-left-wrapper">
                    <Link to='/' ><img src={Image} className='logo' alt="Logo of the event" /></Link>
                    <p>Erasmus Hogeschool Brussel - 2025</p>
                    <Link to={"/policies/privacy"}>Privicy policy</Link>
                    <Link to={"/policies/cookies"}>Cookies policy</Link>
                </div>
                <div className="footer-right-wrapper">
                    <Button 
                        destinationUrl={"register"}
                        copy={"Inschrijven"}
                        className={"button"}
                    />
                    <div className="footer-socials">
                        <a target='_blank' href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-en-creatieve-technologie"><img src="./Logo-school" className='socials' alt="logo-school" /></a>
                        <a target='_blank' href="https://www.linkedin.com/school/erasmushogeschool-brussel/posts/?feedView=all"><img src="./Logo-linkedin" className='socials' alt="Logo linkedin" /></a>
                        <a target='_blank' href="https://www.instagram.com/multimedia.ehb/"><img src="./logo-instagram" className='socials' alt="Logo instagram" /></a>
                        <a target='_blank' href="https://www.tiktok.com/@erasmushogeschool"><img src="./Logo-tiktok" className='socials' alt="Logo tiktok" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;