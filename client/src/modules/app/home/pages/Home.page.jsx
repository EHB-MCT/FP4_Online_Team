import { Canvas } from "@react-three/fiber"
import clsx from "clsx";
import gsap from "gsap"
import { useState, useEffect } from "react";

//Models
import { Model } from "../../../shared/model/Model"

//Components
import Button from "../../../shared/button/Button.jsx";
import CountDown from "../components/countdown/CountDown.jsx";
import { FaqSection } from "../../../shared/faq-section/FaqSection.jsx";
import { ProjectCard } from "../../../shared/ProjectCard/ProjectCard.jsx";

//Hooks
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook.js";

//Routes
import { INFO_ROUTE } from "../../info/info.route.jsx";

//CSS
import styles from './home.module.scss'

export const Home = () => {
    document.title = "Shift Festival - 2025 ";	


    const {data, isLoading} = useProjectsData();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (data && Array.isArray(data) && window.innerWidth >= 767 && window.innerWidth <= 1024) {
            setProjects(data.slice(0, 4));
        }else if(data && Array.isArray(data)){
            setProjects(data.slice(0, 3));
        }
    }, [data])

    return (
        <>
            <section className="pink-wrapper large">
                <div className={clsx(styles["hero-wrapper"])}>
                    <div className={clsx(styles["hero"], "inner-wrapper")}>
                        <h4>Expo 2025&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;20 juni&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Campus Kaai </h4>
                        <CountDown />
                        <p className="white-text">
                            Kom de afstudeerprojecten van onze derdejaarsstudenten Multimedia en creative technologie ontdekken tijdens dit unieke expo/festival. Laat je inspireren door innovatief
                            design, technologie en creativiteit. Schrijf je vandaag nog in en verzeker jezelf van een plekje op dit bijzondere event.
                        </p>
                        <Button destinationUrl={"/register"} copy={"Inschrijven"} className={"button"} />
                        <div className={clsx(styles["hero--mouse-wrapper"])}>
                            <img src="/scroll-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={clsx(styles["projects-preview-wrapper"])}>
                <div className={clsx(styles["projects-preview-wrapper--background-image-top-left"])}>
                    <div className={clsx(styles["projects-preview-wrapper--background-image-top-left--background-image-top-right"])}>
                        <div className={clsx(styles["projects-preview-wrapper--projects-inner-wrapper"],)}>
                            <h2>Eindprojecten</h2>
                            <div className={clsx(styles["projects-preview-wrapper--projects-inner-wrapper--projects-carousel"])}>
                                { isLoading ? (<p>Loading...</p>) : (
                                    projects.map((project) => (
                                        <ProjectCard
                                            key={project.project_name}
                                            project_name={ project.project_name }
                                            student={ project.student }
                                            banner_image={ project.banner_image }
                                            project_category={ project.category }
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className={clsx(styles["practical-info-wrapper"])}>
               <div className={clsx(styles["practical-info-wrapper--practical-info-outer-wrapper"], "inner-wrapper")}>
                    <div className={clsx(styles["practical-info-wrapper--practical-info-text-wrapper"])}>
                        <h2>Shift festival 2025</h2>
                        <p>
                            Welkom bij Shift, de expo waar innovatie, design en creativiteit samenkomen! Dit unieke festival biedt een podium aan de afstudeerprojecten van onze derdejaarsstudenten, waarbij baanbrekende ideeën en vernieuwende technologieën worden gepresenteerd. Daarnaast worden ook de beste werken van studenten uit alle jaren tentoongesteld.
                        </p>
                    </div>
                    

                    <div className={clsx(styles["practical-info-wrapper--practical-info-location-wrapper"])}>
                        <img className="image" src="/homepage-image.png" alt="foto van ehb" />
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
                    <Button
                        destinationUrl={ INFO_ROUTE.path }
                        copy={ "Meer info" }
                        className={ "button" }
                    />
                </div>
            </section>

            <section className={clsx(styles["large-info-wrapper"], styles["purple-wrapper"])}>
                <div className="inner-wrapper">
                    <div className={clsx(styles["large-info-wrapper--programma-info-wrapper"])}>
                        <img className="image" src="programma-img.jpg" alt="" />
                        <div className={clsx(styles["large-info-wrapper--programma-info-wrapper--programma-info"])}>
                            <h2 className="white-text" style={{textAlign: "start"}}>Programma</h2>
                            <p className="white-text">
                                Ontdek onze programma van de festival en al onze workshops
                            </p>
                            <Button
                                destinationUrl={ "#" }
                                copy={ "Programma" }
                                className={ "button" }
                            />
                        </div>
                    </div>
                </div>
            </section>

            <FaqSection />

            <section className={clsx(styles["large-info-wrapper"], styles["orange-wrapper"])}>
                <div className="inner-wrapper">
                    <div className={clsx(styles["large-info-wrapper--mct-info-wrapper"])}>
                        <div className="mct-info">
                            <h2 className="white-text">Multimedia en Creatieve technologie</h2>
                            <p className="white-text">
                                Multimedia & Creatieve Technologie is een veelzijdige studierichting waarin technologie en creativiteit samenkomen. Studenten leren
                                interactieve en digitale ervaringen ontwerpen, ontwikkelen en realiseren met tools zoals webdesign, animatie, AR/VR, videoproductie en
                                programmeren. De focus ligt op innovatie, storytelling en technische vaardigheden, waardoor afgestudeerden klaar zijn voor een carrière
                                in de creatieve en digitale sector.
                            </p>
                            <a href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-en-creatieve-technologie" target="_blank" className="button">Meer</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
