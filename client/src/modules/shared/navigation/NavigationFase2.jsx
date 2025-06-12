import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import LogoBlack from "/Shift_Logo.svg";
import LogoWhite from "/Logo_white.svg";

import "./navigation.css";

export const NavigationFase2 = () => {
	const location = useLocation();
	const isHome = location.pathname === "/" || location.pathname === "/#";

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const nav = document.querySelector(".navigation");
		const onScroll = () => {
			if (window.scrollY > 10) {
				nav.classList.add("scrolled");
				setIsScrolled(true);
			} else {
				nav.classList.remove("scrolled");
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="nav-spacer">
			<nav className={`navigation${isHome ? " navigation--home" : ""}`}>
				<div className="inner-wrapper">
					<Link to="/" className="home-link">
						<img src={isHome && !isScrolled ? LogoWhite : LogoBlack} alt="logo event" />
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
					<button className="hamburger-menu" aria-label="Open navigation" onClick={() => setIsDropdownOpen((open) => !open)}>
						<span className="hamburger-bar"></span>
						<span className="hamburger-bar"></span>
						<span className="hamburger-bar"></span>
					</button>
				</div>
				{isDropdownOpen && (
					<ul className="mobile-nav-links">
						<li>
							<Link to="/program" className="link" onClick={() => setIsDropdownOpen(false)}>
								Programma
							</Link>
						</li>
						<li>
							<Link to="/projects" className="link" onClick={() => setIsDropdownOpen(false)}>
								Eindprojecten
							</Link>
						</li>
						<li>
							<Link to="/info" className="link" onClick={() => setIsDropdownOpen(false)}>
								Info
							</Link>
						</li>
					</ul>
				)}
			</nav>
		</div>
	);
};
