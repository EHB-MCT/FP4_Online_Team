//Components
import CountDown from "../components/countdown/CountDown.jsx";
import Button from "../../../shared/button/Button.jsx";
import InfoLine from "../components/InfoLine.jsx";
import { useEffect } from "react";

//CSS
import styles from './home.module.scss'
import clsx from "clsx";

export const Home = () => {
	document.title = "Shift Festival - 2025 ";	

	return (
		<>
			<section className="pink-wrapper large">
                <div className={clsx(styles["hero-wrapper"])}>
                    <div className={clsx(styles["hero"], "inner-wrapper")}>
                        <h4>Expo 2025&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;20 juni&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Anderlecht </h4>
                        <CountDown />
                        <p className="white-text">
                            Kom de afstudeerprojecten van onze derdejaarsstudenten ontdekken tijdens dit unieke expo/festival. Laat je inspireren door innovatief
                            design, technologie en creativiteit. Schrijf je vandaag nog in en verzeker jezelf van een plekje op dit bijzondere event.
                        </p>
                        <Button destinationUrl={"/register"} copy={"Inschrijven"} className={"button"} />
                    </div>
                </div>
			</section>
			<section className={clsx(styles["practical-info-wrapper"])}>
                <div className="inner-wrapper small-wrapper practical-info-outer-wrapper">
                    <div className={clsx(styles["practical-info-wrapper--practical-info-text-wrapper"])}>
                        <h2>Praktische info</h2>
                        <p>
                            Welkom bij Shift festival, dé expo waar innovatie, design en creativiteit samenkomen! Dit unieke festival biedt een podium aan de
                            afstudeerprojecten van onze derdejaarsstudenten, waarbij baanbrekende ideeën en vernieuwende technologieën worden gepresenteerd.
                            Daarnaast worden ook de beste werken van studenten uit alle jaren tentoongesteld.
                        </p>
                        <p id="more-text">
                            Het evenement is niet alleen een viering van talent, maar ook een inspiratiemoment voor toekomstige studenten. Overweeg je een studie in
                            deze richting? Dan is dit de perfecte kans om de sfeer te proeven, in gesprek te gaan met studenten en docenten, en te ontdekken wat
                            onze opleiding te bieden heeft.
                        </p>
                        <p id="more-text">
                            Bovendien zullen vertegenwoordigers van bedrijven aanwezig zijn, wat dit event ook een uitstekende netwerkmogelijkheid maakt voor
                            iedereen die geïnteresseerd is in de creatieve en technologische sector.
                            <br /> <br />
                            Mis het niet—schrijf je in en laat je inspireren!
                        </p>
                    </div>
                    <div className={clsx(styles["practical-info-wrapper--practical-info-location-wrapper"])}>
                        <img src="/homepage-image.png" alt="foto van ehb" />
                        <div className={clsx(styles["practical-info-wrapper--practical-info-location-wrapper--specific-info"])}>
                            <div className={clsx(styles["practical-info-wrapper--practical-info-location-wrapper--specific-info--specific-info-upper-wrapper"])}>
                                <h2 className="pink-text">20 juni 2025</h2>
                                <h3>17:00 &gt; 22:00</h3>
                            </div>
                            <div className={clsx(styles["practical-info-wrapper--practical-info-location-wrapper--specific-info--specific-info-lower-wrapper"])}>
                                <p>Gratis, maar inschrijven verplicht</p>
                                <p>
                                    Nijverheidskaai 170, 1070 Brussel
                                    <br />
                                    Campus Kaai
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
			</section>

			<section className={clsx(styles["practical-info-wrapper-purple"])}>
				<div className="inner-wrapper">
                    <div className={clsx(styles["practical-info-wrapper-purple--mct-info-wrapper"])}>
                        <div className="mct-info">
                            <h2 className="green-text">Multimedia en Creatieve technologie</h2>
                            <p className="white-text">
                                Multimedia & Creatieve Technologie is een veelzijdige studierichting waarin technologie en creativiteit samenkomen. Studenten leren
                                interactieve en digitale ervaringen ontwerpen, ontwikkelen en realiseren met tools zoals webdesign, animatie, AR/VR, videoproductie en
                                programmeren. De focus ligt op innovatie, storytelling en technische vaardigheden, waardoor afgestudeerden klaar zijn voor een carrière
                                in de creatieve en digitale sector.
                            </p>
                        </div>
					    <Button destinationUrl={"/register"} copy={"Meer"} className={"button"} />
                    </div>
				</div>
			</section>
		</>
	);
};
