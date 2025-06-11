import { Link } from "react-router";
import { useState } from "react";
import Image from "/Logo.svg";
import Button from "../button/Button.jsx";

import "./navigation.css";

export const NavigationFase2 = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	return (
		<nav>
			<div className="inner-wrapper">
				<div className="nav-container">
					<Link to="/" className="home-link">
						<img src={Image} alt="logo event" />
					</Link>

					<ul className="nav-links">
						<li>
							<Link to="/" className="link">
								Programma
							</Link>
						</li>

						<li className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
							<span className="link cursor-pointer">
								<Link to="/projects" className="link">
									Eindjaarprojecten ▾
								</Link>
							</span>
							{isDropdownOpen && (
								<ul className="dropdown-menu">
									<li>
										<Link to="/projects/app-web" className="dropdown-link">
											App/Web
										</Link>
									</li>
									<li>
										<Link to="/projects/game-vr" className="dropdown-link">
											Game/AR/VR
										</Link>
									</li>
									<li>
										<Link to="/projects/installatie" className="dropdown-link">
											Installatie/Prototype
										</Link>
									</li>
									<li>
										<Link to="/projects/motion" className="dropdown-link">
											Motion Graphics
										</Link>
									</li>
								</ul>
							)}
						</li>

						<li>
							<Link to="/price" className="link">
								Prijzen
							</Link>
						</li>
						<li>
							<Link to="/info" className="link">
								Info
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
