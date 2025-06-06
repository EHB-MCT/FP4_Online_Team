import { NavLink, } from 'react-router';
import clsx from 'clsx';

//Components
import Button from '../button/Button.jsx';

//Images
import Image from '/Logo_white.svg'

//CSS
import styles from './navigation.module.scss'

//Routes
import { HOME_ROUTE } from '../../app/home/home.route.jsx';

export const Navigation = () => {

    return(
        <nav>
            <div className={clsx(styles["inner-wrapper"])}>
                <div className={clsx(styles["inner-wrapper--navigation-wrapper"])}>
                    <NavLink to={ HOME_ROUTE.path } className='home-link'><img className={clsx(styles["inner-wrapper--navigation-wrapper--logo-shift"])} src={ Image } alt="logo event" /></NavLink>
                    <NavLink to="http://erasmushogeschool.be" target='_blank' className='home-link'><img className={clsx(styles["inner-wrapper--navigation-wrapper--logo-ehb"])} src={ "/ehb-logo-wit.png" } alt="logo event" /></NavLink>
                </div>
            </div>
        </nav>
    )

}
