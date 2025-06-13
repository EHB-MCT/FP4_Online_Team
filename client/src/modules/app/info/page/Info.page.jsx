import clsx from "clsx";
import { NavLink } from "react-router";

//Components
import { FaqSection } from "../../../shared/faq-section/FaqSection";

//CSS
import styles from "./info.module.scss";
import homeStyles from "../../home/pages/home.module.scss";
import { strToU8 } from "three/examples/jsm/libs/fflate.module.js";
import { AwardsInfo } from "../components/AwardsInfo";
import { Timetable } from "../../../shared/timetable/Timetable";
import Button from "../../../shared/button/Button";
import { REGISTER_ROUTE } from "../../register/register.route";

export const Info = () => {
	return (
		<>
			<div className={clsx(styles["header"])}>
				<div className="inner-wrapper">
					<div className={clsx(styles["info-hero-wrapper"])}>
						<h2 className="black-text">Info</h2>
						<div className={clsx(styles["info-hero-wrapper--hero-image-wrapper"])}>
							<img src="/infoBanner.png" alt="Info Banner" className="w-full h-auto" />
						</div>
					</div>
				</div>
			</div>
			<div className={clsx(styles["practical-info-wrapper"])}>
				<div className={clsx(styles["practical-info-wrapper--practical-info-outer-wrapper"], "inner-wrapper")}>
					<div className={clsx(styles["practical-info-wrapper--practical-info-text-wrapper"])}>
						<h2>Shift festival 2025</h2>
						<p>
							Welkom bij Shift, de expo waar innovatie, design en creativiteit samenkomen! Dit unieke festival biedt een podium aan de afstudeerprojecten van onze derdejaarsstudenten, waarbij baanbrekende ideeën en vernieuwende technologieën worden
							gepresenteerd. Daarnaast worden ook de beste werken van studenten uit alle jaren tentoongesteld.
						</p>
						<p>
							Het evenement is niet alleen een viering van talent, maar ook een inspiratiemoment voor toekomstige studenten. Overweeg je een studie in deze richting? Dan is dit de perfecte kans om de sfeer te proeven, in gesprek te gaan met studenten
							en docenten, en te ontdekken wat onze opleiding te bieden heeft.
						</p>
						<p>Bovendien zullen vertegenwoordigers van bedrijven aanwezig zijn, wat dit event ook een uitstekende netwerkmogelijkheid maakt voor iedereen die geïnteresseerd is in de creatieve en technologische sector.</p>
					</div>
				</div>
			</div>

			<section className={clsx(styles["google-maps-wrapper"], "inner-wrapper")}>
				<div className={clsx(styles["google-maps-wrapper--location-info"])}>
					<div className={clsx(styles["google-maps-wrapper--location-info--maps-frame"])}>
						<iframe
							className="imageMap"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10073.75933673564!2d4.322807999999995!3d50.842239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c40f19faf0f9%3A0x4ef5b683135ecb1e!2sErasmushogeschool%20Brussel!5e0!3m2!1snl!2sbe!4v1749634068449!5m2!1snl!2sbe"
							width="100%"
							height="100%"
							style={{ border: "0", borderRadius: "20px" }}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<div className={clsx(homeStyles["practical-info-wrapper--practical-info-location-wrapper--specific-info"])}>
						<div className={clsx(homeStyles["practical-info-wrapper--practical-info-location-wrapper--specific-info--specific-info-upper-wrapper"])}>
							<h2 className="black-text" style={{ textAlign: "start" }}>
								20 juni 2025
							</h2>
							<h3 className="black-text">17:00 &gt; 21:00</h3>
						</div>
						<div className={clsx(homeStyles["practical-info-wrapper--practical-info-location-wrapper--specific-info--specific-info-lower-wrapper"])}>
							<p>Gratis, maar inschrijven verplicht</p>
							<p>
								Nijverheidskaai 170, 1070 Brussel
								<br />
								Campus Kaai
							</p>
							<Button destinationUrl={REGISTER_ROUTE.path} copy={"Inschrijven"} className={"button"} />
						</div>
					</div>
				</div>
			</section>

			<section className={clsx(styles["awards-wrapper"], "orange-wrapper")}>
				<div className={clsx(styles["awards-wrapper--awards-inner-wrapper"], "inner-wrapper")}>
					<AwardsInfo
						price_title={"Juryprijs"}
						badge={"jury"}
						description={"De Juryprijs wordt uitgereikt door onze eigen docenten met hun jaren ervaring en kennis.  Ze zochten naar een duidelijke visie, met veel creativiteit en afwerking. En volgens hen was de keuze niet makkelijk."}
					/>
					<AwardsInfo
						price_title={"Publieksprijs"}
						badge={"publiek"}
						description={"De Publieksprijs werd bepaald door de stemmen van jullie en het publiek.Jullie kregen allemaal de kans om te stemmen op jullie favoriete projecten. Nu gaan we zien welke 3 dat waren"}
					/>
					<AwardsInfo
						price_title={"Innovatieprijs"}
						badge={"innovatie"}
						description={" De Innovatieprhijs bekroont het meest vernieuwende technische project. Een project dat niet alleen creatief is, maar ook technisch uitdagend. Waarin grenzen worden verlegd."}
					/>
					<AwardsInfo price_title={"Impactprijs"} badge={"impact"} description={"Deze gaat naar het project dat de grootste maatschappelijke impact maakt en het meest potentieel heeft om echte veranderingen te maken in de wereld"} />
				</div>
			</section>

			<section className={clsx(styles["teaser-video-wrapper"])}>
				<div className={clsx(styles["teaser-video-wrapper--teaser-video-inner-wrapper"], "inner-wrapper small-wrapper")}>
					<h2>Aftermovie EXPO24</h2>
					<iframe
						className={clsx(styles["teaser-video-wrapper--teaser-video-inner-wrapper--teaser-video"])}
						src="https://www.youtube.com/embed/ifv5pC7-qtI?si=c5xuW800eOxgKMQb&enablejsapi=1&origin=https%3A%2F%2Fwww.erasmushogeschool.be"
						width="100%"
						height="100%"
						style={{ border: "0", borderRadius: "20px" }}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</section>
			<section className={clsx(styles["course-info-wrapper"], "blue-wrapper")}>
				<div className={clsx(styles["course-info-wrapper--course-info-inner-wrapper"], "inner-wrapper")}>
					<div className={clsx(styles["course-info-wrapper--course-info-inner-wrapper--main-info-wrapper"])}>
						<h2 className="white-text" style={{ textAlign: "start" }}>
							Opleiding
						</h2>
						<p
							className="white-text"
							dangerouslySetInnerHTML={{
								__html: `
                                    Wil je leren programmeren en ontwerpen om zelf je websites en apps te maken? Interesse in het maken van 3D games voor Virtual Reality of Metaverse? Wil je kunnen vliegen en filmen met drones of een virtuele filmstudio maken? Zou je graag Motion Graphics kunnen maken en videobeelden monteren en bewerken?<br/><br/>
                                    Ontdek meer over onze opleiding.<br/>Infodag: zaterdag 28 juni
                                `,
							}}
						></p>
						<Button destinationUrl={"https://www.erasmushogeschool.be/nl/opleidingen/multimedia-en-creatieve-technologie"} copy={"Meer"} className={"button"} backgroundColor={"#ec6230"} hoverColor={"#FFF"}></Button>
					</div>
					<div className={clsx(styles["course-info-wrapper--course-info-inner-wrapper--image-wrapper"])}>
						<img className={"image"} src="opleiding-image.png" alt="" />
					</div>
				</div>
			</section>

			<Timetable />

			<FaqSection />
		</>
	);
};
