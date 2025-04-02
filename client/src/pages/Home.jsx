//Components
import CountDown from "../components/CountDown.jsx";
import Button from "../components/Button.jsx";
import InfoLine from "../components/InfoLine.jsx";

const Home = () => {

    return (
        <div>
            <section className="hero-wrapper">
                <h3>Expo 2025&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;20 juni&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Anderlecht </h3>
                <CountDown />
                <p>
                    Kom de afstudeerprojecten van onze derdejaarsstudenten ontdekken tijdens dit unieke expo/festival. Laat je inspireren door innovatief design, technologie en creativiteit. Schrijf je vandaag nog in en verzeker jezelf van een plekje op dit bijzondere event.
                </p>
                <Button
                    destinationUrl={'/register'}
                    copy={"Inschrijven"}
                />
            </section>
            <section className="practical-info-wrapper">
                <h2>Praktische info</h2>
                <p>
                    Welkom bij [naam evenement], dé expo waar innovatie, design en creativiteit samenkomen! Dit unieke festival biedt een podium aan de afstudeerprojecten van onze derdejaarsstudenten, waarbij baanbrekende ideeën en vernieuwende technologieën worden gepresenteerd. Daarnaast worden ook de beste werken van studenten uit alle jaren tentoongesteld.
                    <br /><br />
                    Het evenement is niet alleen een viering van talent, maar ook een inspiratiemoment voor toekomstige studenten. Overweeg je een studie in deze richting? Dan is dit de perfecte kans om de sfeer te proeven, in gesprek te gaan met studenten en docenten, en te ontdekken wat onze opleiding te bieden heeft.
                    <br /><br />
                    Bovendien zullen vertegenwoordigers van bedrijven aanwezig zijn, wat dit event ook een uitstekende netwerkmogelijkheid maakt voor iedereen die geïnteresseerd is in de creatieve en technologische sector.
                    <br /><br />
                    Mis het niet—schrijf je in en laat je inspireren!
                </p>
                <div className="practical-info-innerwrapper">
                    <div className="specific-info-wrapper">
                        <InfoLine 
                            icon="./"
                            copy="20 juni 2025"
                        />
                        <InfoLine 
                            icon="./"
                            copy="Vanaf 16 uur"
                        />
                        <InfoLine 
                            icon="./"
                            copy="Gratis maar inschrijven verplicht"
                        />
                        <InfoLine 
                            icon="./"
                            copy="Nijverheidskaai 170, 1070 Anderlecht"
                        />
                    </div>
                    <div className="google-maps-wrapper">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4754936891018!2d4.322295361603742!3d50.84161158071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c40f19faf0f9%3A0x6a19083b298c5df0!2sNijverheidskaai%20170%2C%201070%20Anderlecht!5e0!3m2!1snl!2sbe!4v1743596139302!5m2!1snl!2sbe" 
                            width="600" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <Button 
                    destinationUrl={"register"}
                    copy={"Inschrijven"}
                />
            </section>
            <section className="study-area-wrapper">
                <h2>Multimedia en creatieve technologie</h2>
                <p>
                    Multimedia & Creatieve Technologie is een veelzijdige studierichting waarin technologie en creativiteit samenkomen. Studenten leren interactieve en digitale ervaringen ontwerpen, ontwikkelen en realiseren met tools zoals webdesign, animatie, AR/VR, videoproductie en programmeren. De focus ligt op innovatie, storytelling en technische vaardigheden, waardoor afgestudeerden klaar zijn voor een carrière in de creatieve en digitale sector.
                </p>
                <a href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-en-creatieve-technologie" target="_blank" rel="noopener noreferrer">Meer</a>
            </section>
        </div>
    );
}

export default Home;