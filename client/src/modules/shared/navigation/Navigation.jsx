import { NavLink, } from 'react-router';

//Components
import Button from '../button/Button.jsx';

//Images
import Image from '/Logo.svg'

//Routes
import { HOME_ROUTE } from '../../app/home/home.route.jsx';
import { REGISTER_ROUTE } from '../../app/register/register.route.jsx';

export const Navigation = () => {

    return(
        <nav>
            <div className="inner-wrapper">
                <NavLink to={ HOME_ROUTE.path } className='home-link'><img src={Image} alt="logo event" /></NavLink>
                <Button
                    destinationUrl={ REGISTER_ROUTE.path }
                    copy={"Inschrijven"}
                    className={"button"}
                />
            </div>
        </nav>
    )

}
