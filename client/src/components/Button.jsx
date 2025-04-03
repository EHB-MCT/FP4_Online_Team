import {Link} from 'react-router';

//CSS

const Button = ({ destinationUrl, copy, className }) => {
    return (
        <Link to={destinationUrl} className={ className } > {copy} </Link>
    )
}

export default Button;