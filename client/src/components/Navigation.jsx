import { Link } from 'react-router';

import Image from '../../public/logo.svg'

//Components
import Button from './Button.jsx';

const Navigation = () => {

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

export default Navigation