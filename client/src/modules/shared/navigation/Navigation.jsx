import { Link } from 'react-router';

import Image from '/Logo.svg'

//Components
import Button from '../button/Button.jsx';

export const Navigation = () => {

    return(
        <nav>
            <div className="inner-wrapper">
                <Link to='/' className='home-link'><img src={Image} alt="logo event" /></Link>
                <Button
                    destinationUrl={'/register'}
                    copy={"Inschrijven"}
                    className={"button"}
                />
            </div>
        </nav>
    )

}
