import { Link } from 'react-router';

import Image from '../../public/logo-placeholder-image.png'

//Components
import Button from './Button.jsx';

const Navigation = () => {

    return(
        <nav>
                <Link to='/' className='home-link'><img src={Image} alt="logo event" /></Link>
                <Button
                    destinationUrl={'/register'}
                    copy={"Inschrijven"}
                    className={"button"}
                />
        </nav>
    )

}

export default Navigation