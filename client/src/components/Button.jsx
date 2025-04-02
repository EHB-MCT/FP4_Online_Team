import {Link} from 'react-router';

//CSS

const Button = ({ destinationUrl, copy }) => {
    return (
        <Link to={destinationUrl} > {copy} </Link>
    )
}

export default Button;