import { Link } from "react-router";
import Image from "/Logo.svg";

//Components
import Button from "../button/Button.jsx";

export const NavigationFase2 = () => {
	return (
		<nav>
			<div className="inner-wrapper">
				<Link to="/" className="home-link">
					<img src={Image} alt="logo event" />
				</Link>
				<ul className="nav-links">
					<li>
						<Link to="/" className="link">
							Programma
						</Link>
					</li>
					<li>
						<Link to="/" className="link">
							Eindjaarprojecten
						</Link>
					</li>
					<li>
						<Link to="/" className="link">
							Workshops
						</Link>
					</li>
					<li>
						<Link to="/" className="link">
							Info
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
