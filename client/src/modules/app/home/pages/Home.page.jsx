import { Canvas } from "@react-three/fiber"
import clsx from "clsx";
import gsap from "gsap"
import { useState, useEffect } from "react";

//Models
import { Model } from "../../../shared/model/Model"

//Components
import CountDown from "../components/countdown/CountDown.jsx";
import Button from "../../../shared/button/Button.jsx";

//Hooks
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook.js";

//Routes
import { INFO_ROUTE } from "../../info/info.route.jsx";

//CSS
import styles from './home.module.scss'
import { ProjectCard } from "../../../shared/ProjectCard/ProjectCard.jsx";


export const Home = () => {
    document.title = "Shift Festival - 2025 ";	


    const {data, isLoading} = useProjectsData();
    const [projects, setProjects] = useState([]);
    const [rotationY, setRotationY] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionDirection, setTransitionDirection] = useState('next');

    const awards = [
        {
            title: "Publieksprijs",
            description: "Gekozen door het publiek."
        },
        {
            title: "Juryprijs",
            description: "Geselecteerd door de jury."
        },
        {
            title: "Innovatieprijs",
            description: "Meest vernieuwend project."
        },
        {
            title: "Impactprijs",
            description: "Project met grootste impact."
        }
    ];    

    useEffect(() => {
        if (data && Array.isArray(data)) {
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

            <section className={clsx(styles["practical-info-wrapper"])}>
                <div className={clsx(styles["practical-info-wrapper--background-image-top-left"])}>
                    <div className={clsx(styles["practical-info-wrapper--background-image-top-left--background-image-top-right"])}>
                        <div className={clsx(styles["practical-info-outer-wrapper"], "inner-wrapper small-wrapper ")}>
                            <div className={clsx(styles["practical-info-wrapper--practical-info-text-wrapper"])}>
                                <h2>Shift festival 2025</h2>
                                <p>
                                   Welkom bij Shift, de expo waar innovatie, design en creativiteit samenkomen! Dit unieke festival biedt een podium aan de afstudeerprojecten van onze derdejaarsstudenten, waarbij baanbrekende ideeën en vernieuwende technologieën worden gepresenteerd. Daarnaast worden ook de beste werken van studenten uit alle jaren tentoongesteld.
                                </p>
                                <p id="more-text">
                                    Het evenement is niet alleen een viering van talent, maar ook een inspiratiemoment voor toekomstige studenten. Overweeg je een studie in deze richting? Dan is dit de perfecte kans om de sfeer te proeven, in gesprek te gaan met studenten en docenten, en te ontdekken wat onze opleiding te bieden heeft.
                                </p>
                                <p id="more-text">
                                    Bovendien zullen vertegenwoordigers van bedrijven aanwezig zijn, wat dit event ook een uitstekende netwerkmogelijkheid maakt voor iedereen die geïnteresseerd is in de creatieve en technologische sector.
                                </p>
                                <Button
                                    destinationUrl={ INFO_ROUTE.path }
                                    copy={ "info" }
                                    className={ "button" }
                                />
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
                            {/* <div className={clsx(styles["practical-info-wrapper--practical-info-location-wrapper"])}>
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
                            <div className={clsx(styles["practical-info-wrapper--maps-frame"])}>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6108.236960527531!2d4.317942457393778!3d50.84224228625964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c40f19faf0f9%3A0x4ef5b683135ecb1e!2sErasmushogeschool%20Brussel!5e1!3m2!1snl!2sbe!4v1749143530421!5m2!1snl!2sbe" 
                                    width="100%"
                                    height="100%" 
                                    style={{ border: "0"}} 
                                    allowFullScreen={ true } 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                            </div> */}
                        </div>
                    </div>
                </div>
                
            </section>

            <section className={clsx(styles["projects-preview-wrapper"])}>
                <div className={clsx(styles["projects-preview-wrapper--projects-inner-wrapper"], "inner-wrapper")}>
                    <h2>Eindejaarsprojecten</h2>
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

            </section>
            


            <section className={clsx(styles["large-info-wrapper"], styles["orange-wrapper"])}>
                <div className="inner-wrapper">
                    <div className={clsx(styles["large-info-wrapper--mct-info-wrapper"])}>
                        <img src="homepage-image.png" alt="" />
                        <div className="mct-info">
                            <h2 className="green-text">Programma</h2>
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

            {/* <section className={clsx(styles["teaser-video-wrapper"])}>
                <div className={clsx(styles["teaser-video-wrapper--teaser-video-inner-wrapper"],"inner-wrapper small-wrapper")}>
                    <h2>Aftermovie EXPO24</h2>
                    < iframe
                        className={clsx(styles["teaser-video-wrapper--teaser-video-inner-wrapper--teaser-video"])}
                        src="https://www.youtube.com/embed/ifv5pC7-qtI?si=c5xuW800eOxgKMQb&enablejsapi=1&origin=https%3A%2F%2Fwww.erasmushogeschool.be"
                        width="100%"
                        height="100%" 
                        style={{ border: "0"}} 
                        allowFullScreen={ true } 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section> */}

            <section className={clsx(styles["large-info-wrapper"], styles["purple-wrapper"])}>
                <div className="inner-wrapper">
                    <div className={clsx(styles["large-info-wrapper--mct-info-wrapper"])}>
                        <div className="mct-info">
                            <h2 className="green-text">Multimedia en Creatieve technologie</h2>
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
