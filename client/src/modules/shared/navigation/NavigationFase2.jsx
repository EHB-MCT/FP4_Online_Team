import { Link } from "react-router";
import { useState, useEffect } from "react";
import Image from "/Shift_Logo.svg";

import "./navigation.css";

export const NavigationFase2 = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	useEffect(() => {
		const nav = document.querySelector(".navigation");
		const onScroll = () => {
			if (window.scrollY > 10) {
				nav.classList.add("scrolled");
			} else {
				nav.classList.remove("scrolled");
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="nav-spacer">
			<nav className="navigation">
				<div className="inner-wrapper">
					<Link to="/" className="home-link">
						<img src={Image} alt="logo event" />
					</Link>

					<ul className="nav-links">
						<li>
							<Link to="/program" className="link">
								Programma
							</Link>
						</li>

						<li className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
							<span className="link cursor-pointer">
								<Link to="/projects" className="link">
									Eindprojecten ▾
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
							<Link to="/info" className="link">
								Info
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
