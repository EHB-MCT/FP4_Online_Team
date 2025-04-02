import { Link } from 'react-router';

//Components
import Button from './Button.jsx';

const Navigation = () => {

    return(
        <nav>
            <ul>
                <li>
                    <Link to='/' ><img src="./" alt="logo event" /></Link>
                </li>
                <li>
                <Button
                    destinationUrl={'/register'}
                    copy={"Inschrijven"}
                />
                </li>
            </ul>
        </nav>
    )

}

export default Navigation