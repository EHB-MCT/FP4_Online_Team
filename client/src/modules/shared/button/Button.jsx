import { NavLink} from 'react-router';

//CSS

const Button = ({ destinationUrl, copy, className }) => {
    return (
        <NavLink to={destinationUrl} className={ className } > {copy} </NavLink>
    )
}

export default Button;