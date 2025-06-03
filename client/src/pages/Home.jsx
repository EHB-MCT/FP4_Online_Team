//Components
import CountDown from "../components/CountDown.jsx";
import Button from "../components/Button.jsx";
import InfoLine from "../components/InfoLine.jsx";
import { useEffect } from "react";


const Home = () => {
    
document.title = "Expo 2025 "
    return (
        <>
            <section className="hero-wrapper">
                <div className="inner-wrapper hero">
                    <h2 id="quick-info">Expo 2025&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;20 juni&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Anderlecht </h2>
                    <CountDown />
                    <p>
                        Kom de afstudeerprojecten van onze derdejaarsstudenten ontdekken tijdens dit unieke expo/festival. Laat je inspireren door innovatief design, technologie en creativiteit. Schrijf je vandaag nog in en verzeker jezelf van een plekje op dit bijzondere event.
                    </p>
                    <Button
                        destinationUrl={'/register'}
                        copy={"Inschrijven"}
                        className={"button"}
                    />
                </div>
            </section>
            <section className="practical-info-wrapper">
                <div className="inner-wrapper practical-info">
                    <h2>Praktische info</h2>
                    <p>
                        Welkom bij Shift festival, dé expo waar innovatie, design en creativiteit samenkomen! Dit unieke festival biedt een podium aan de afstudeerprojecten van onze derdejaarsstudenten, waarbij baanbrekende ideeën en vernieuwende technologieën worden gepresenteerd. Daarnaast worden ook de beste werken van studenten uit alle jaren tentoongesteld.
                    </p>
                    <p id="more">
                        Het evenement is niet alleen een viering van talent, maar ook een inspiratiemoment voor toekomstige studenten. Overweeg je een studie in deze richting? Dan is dit de perfecte kans om de sfeer te proeven, in gesprek te gaan met studenten en docenten, en te ontdekken wat onze opleiding te bieden heeft.
                    </p>
                    <p id="more">
                        <br /> <br />Bovendien zullen vertegenwoordigers van bedrijven aanwezig zijn, wat dit event ook een uitstekende netwerkmogelijkheid maakt voor iedereen die geïnteresseerd is in de creatieve en technologische sector.
                    </p>
                    <p id="more">
                        <br /><br />Mis het niet—schrijf je in en laat je inspireren!
                    </p>
                    <div className="practical-info-inner-wrapper">
                        <div className="specific-info">
                            <div className="specific-info-upper-wrapper">
                                <h3>20 juni 2025</h3>
                                <h3>17u - 21u</h3>
                                <Button 
                                    destinationUrl={"register"}
                                    copy={"Inschrijven"}
                                    className={"button"}
                                />
                            </div>
                            <div className="specific-info-lower-wrapper">
                                <p>Gratis, maar inschrijven verplicht</p>
                                <p>Nijverheidskaai 170, 1070 Brussel
                                <br />Campus Kaai</p>
                            </div>
                        </div>
                        <div className="google-maps-wrapper">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4754936891018!2d4.322295361603742!3d50.84161158071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c40f19faf0f9%3A0x6a19083b298c5df0!2sNijverheidskaai%20170%2C%201070%20Anderlecht!5e0!3m2!1snl!2sbe!4v1743596139302!5m2!1snl!2sbe" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                
                </div>
            </section>
            <section className="study-area-wrapper">
                <div className=" study-area">
                    <img src="/homepage-image.png" alt="" />
                    <div className="study-area-info-inner-wrapper inner-wrapper">
                        <h2>Multimedia en creatieve technologie</h2>
                        <p>
                            Multimedia & Creatieve Technologie is een veelzijdige studierichting waarin technologie en creativiteit samenkomen. Studenten leren interactieve en digitale ervaringen ontwerpen, ontwikkelen en realiseren met tools zoals webdesign, animatie, AR/VR, videoproductie en programmeren. De focus ligt op innovatie, storytelling en technische vaardigheden, waardoor afgestudeerden klaar zijn voor een carrière in de creatieve en digitale sector.
                        </p>
                        <a href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-en-creatieve-technologie" target="_blank" className="button">Meer</a>
                    </div>
                        
                </div>
            </section>
        </>
    );
}

export default Home;