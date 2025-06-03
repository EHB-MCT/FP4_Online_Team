import { Link, NavLink } from 'react-router';
import Image from '/Logo.svg';

//Components
import Button from '../button/Button.jsx';

//Route
import { REGISTER_ROUTE } from '../../app/register/register.route.jsx';

export const Footer = () => {

    return(
        <footer>
            <div className="inner-wrapper">
                <div className="footer-left-wrapper">
                    <NavLink to='/' ><img src={Image} className='logo' alt="Logo of the event" /></NavLink>
                    <p>Erasmus Hogeschool Brussel - 2025</p>
                </div>
                <div className="footer-right-wrapper">
                    <Button 
                        destinationUrl={ REGISTER_ROUTE.path }
                        copy={"Inschrijven"}
                        className={"button"}
                    />
                    <div className="footer-socials">
                        <a target='_blank' href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-en-creatieve-technologie"><img src="/ehb-logo-wit.png" className='socials-ehb' alt="logo-school" /></a>
                        <a target='_blank' href="https://www.linkedin.com/school/erasmushogeschool-brussel/posts/?feedView=all"><img src="/linkedin.svg" className='socials' alt="Logo linkedin" /></a>
                        <a target='_blank' href="https://www.instagram.com/multimedia.ehb/"><img src="/instagram.svg" className='socials' alt="Logo instagram" /></a>
                        <a target='_blank' href="https://www.tiktok.com/@erasmushogeschool"><img src="/tiktok.svg" className='socials' alt="Logo tiktok" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )

}