import clsx from "clsx";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";

//Components
import Button from "../../../shared/button/Button.jsx";
import CountDown from "../components/countdown/CountDown.jsx";
import { ProjectCard } from "../../../shared/ProjectCard/ProjectCard.jsx";
import { FaqDropdown } from "../../../shared/faq-section/components/faq-dropdown/FaqDropdown.jsx";

//Hooks
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook.js";

//Routes
import { INFO_ROUTE } from "../../info/info.route.jsx";
import { PROJECTS_ROUTE } from "../../projects/projects.route.jsx";
import { PROGRAM_ROUTE } from "../../program/program.route.jsx";

//CSS
import styles from "./home.module.scss";

//video
import { heroVideo } from "../../../utils/index.js";

export const Home = () => {
	document.title = "Shift Festival - 2025 ";

	const { data, isLoading } = useProjectsData();
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		if (data) {
			setProjects(data.slice(0, 6));
		}
	}, [data]);

	return (
		<>
			<section style={{ backgroundColor: "#1D1D1D", padding: "0" }} className={clsx(styles["pink-wrapper"])}>
				<div className={clsx(styles["pink-wrapper--large-wrapper"])}>
					<video autoPlay muted loop playsInline key={heroVideo}>
						<source src="hero.mp4" type="video/mp4" />
					</video>
					<div className={clsx(styles["pink-wrapper--large-wrapper--hero-wrapper"], "inner-wrapper")}>
						<div className={clsx(styles["pink-wrapper--large-wrapper--hero-wrapper--hero"])}>
							<h4>Expo 2025&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;20 juni&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Campus Kaai</h4>
							<CountDown />
							<p className={clsx(styles["pink-wrapper--large-wrapper--hero-wrapper--hero--hero-copy"], "white-text")}>Beleef interactieve installaties, verbluffende afstudeerprojecten en de beste werken van onze Multimedia & Creative Technology-studenten.</p>
							<Button destinationUrl={"/register"} copy={"Inschrijven"} className={"button"} color={"#FFF"} hoverColor={"#FFF"} />
							<div className={clsx(styles["hero--mouse-wrapper"])}>
								<img src="/scroll-icon.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* projects preview */}


			<section className={clsx(styles["practical-info-wrapper"])}>
				<div className={clsx(styles["practical-info-wrapper--practical-info-outer-wrapper"], "inner-wrapper")}>
					<div className={clsx(styles["practical-info-wrapper--practical-info-text-wrapper"])}>
						<h2 className="white-text" style={{ textAlign: "start", margin: "0" }}>
							Shift festival 2025
						</h2>
						<p style={{ margin: 0 }}>
							Welkom bij Shift, de expo waar innovatie, design en creativiteit samenkomen! Dit unieke festival biedt een podium aan de afstudeerprojecten van onze derdejaarsstudenten, waarbij baanbrekende ideeën en vernieuwende technologieën worden
							gepresenteerd. Daarnaast worden ook de beste werken van studenten uit alle jaren tentoongesteld.
						</p>
					</div>

					<div className={clsx(styles["practical-info-wrapper--practical-info-location-wrapper"])}>
						<img src="/homepage-image.png" alt="foto van ehb" />
						<div className={clsx(styles["practical-info-wrapper--practical-info-location-wrapper--specific-info"])}>
							<div className={clsx(styles["practical-info-wrapper--practical-info-location-wrapper--specific-info--specific-info-upper-wrapper"])}>
								<h2 className="black-text" style={{ textAlign: "start" }}>
									20 juni 2025
								</h2>
								<h3 className="black-text">17:00 &gt; 21:00</h3>
							</div>
							<div className={clsx(styles["practical-info-wrapper--practical-info-location-wrapper--specific-info--specific-info-lower-wrapper"])}>
								<p>Gratis, maar inschrijven verplicht</p>
								<p>
									Nijverheidskaai 170, 1070 Brussel
									<br />
									Campus Kaai
								</p>
								<Button destinationUrl={INFO_ROUTE.path} copy={"Meer info"} className={"button"} />
							</div>
						</div>
					</div>
				</div>
				<div className={clsx(styles["large-info-wrapper"])}>
				<div className="inner-wrapper">
					<div className={clsx(styles["large-info-wrapper--programma-info-wrapper"])}>
						<img src="programma-img.jpg" alt="" />
						<div className={clsx(styles["large-info-wrapper--programma-info-wrapper--programma-info"])}>
							<h2 className="black-text" style={{ textAlign: "start" }}>
								Programma
							</h2>
							<p className="black-text">
								Ontdek het volledige programma van het festival, inclusief alle workshops.
							</p>
							<Button destinationUrl={PROGRAM_ROUTE.path} copy={"Programma"} className={"button"} />
						</div>
					</div>
				</div>
			</div>
			</section>


			<section className={clsx(styles["FAQ-section"])}>
				<div className="inner-wrapper">
					<div className={clsx(styles["FAQ-section--FAQ-wrapper"])}>
						<h2>FAQ</h2>

						<FaqDropdown />
					</div>
				</div>
			</section>

			<section className={clsx(styles["large-info-wrapper"], styles["orange-wrapper"])}>
				<div className="inner-wrapper">
					<div className={clsx(styles["large-info-wrapper--mct-info-wrapper"])}>
						<div className="mct-info">
							<h2 className="white-text">Multimedia en Creatieve technologie</h2>
							<p className="white-text">
								Multimedia & Creatieve Technologie is een veelzijdige studierichting waarin technologie en creativiteit samenkomen. Studenten leren interactieve en digitale ervaringen ontwerpen, ontwikkelen en realiseren met tools zoals webdesign,
								animatie, AR/VR, videoproductie en programmeren. De focus ligt op innovatie, storytelling en technische vaardigheden, waardoor afgestudeerden klaar zijn voor een carrière in de creatieve en digitale sector.
							</p>
							<Button destinationUrl={"https://www.erasmushogeschool.be/nl/opleidingen/multimedia-en-creatieve-technologie"} copy={"Meer"} className={"button"} hoverColor={"#FFF"}></Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
