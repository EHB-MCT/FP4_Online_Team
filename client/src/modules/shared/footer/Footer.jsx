import { Link, NavLink } from "react-router";

//Components
import Button from "../button/Button.jsx";

//Route
import { INFO_ROUTE } from "../../app/info/info.route.jsx";
import { PROGRAM_ROUTE } from "../../app/program/program.route.jsx";
import { REGISTER_ROUTE } from "../../app/register/register.route.jsx";

//Images
import Image from "/Logo_white.svg";


export const Footer = () => {
	return (
		<footer>
			<div className="inner-wrapper">
				<div className="footer-left-wrapper">
					<NavLink to="/">
						<img className="logo-shift" src={Image} alt="Logo of the event" />
					</NavLink>
					<div className="footer-event-info">
						<p>Erasmushogeschool Brussel - 2025</p>
						<p>Nijverheidskaai 170, 1070 Anderlecht</p>
						<p>20 juni 2025</p>
						<p>17:00 &gt; 21:00</p>
					</div>
				</div>
				<div className="footer-right-wrapper">
					<NavLink to={ INFO_ROUTE.path }>Info</NavLink>
					<NavLink to={ PROGRAM_ROUTE.path }>Programma</NavLink>
					<Button
						destinationUrl={REGISTER_ROUTE.path}
						copy={"Inschrijven"}
						className={"button"}
						color={"#3F53A2"}
						backgroundColor={"#cedc29"}
						hoverColor={"#FFF"}
					/>
					<div className="footer-socials">
						<a
							target="_blank"
							href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-en-creatieve-technologie"
						>
							<img src="/ehb-logo-wit.png" className="socials-ehb" alt="logo-school" />
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/school/erasmushogeschool-brussel/posts/?feedView=all"
						>
							<img src="/linkedin.svg" className="socials" alt="Logo linkedin" />
						</a>
						<a target="_blank" href="https://www.instagram.com/multimedia.ehb/">
							<img src="/instagram.svg" className="socials" alt="Logo instagram" />
						</a>
						<a target="_blank" href="https://www.tiktok.com/@multimedia.ehb">
							<img src="/tiktok.svg" className="socials" alt="Logo tiktok" />
						</a>
					</div>
					{/* <div className="footer-policy">
                        <NavLink to={"#"}>Cookie policy</NavLink>
                        <p>-</p>
                        <NavLink to={"#"}>Privacy policy</NavLink>
                    </div> */}
				</div>
			</div>
		</footer>
	);
};
