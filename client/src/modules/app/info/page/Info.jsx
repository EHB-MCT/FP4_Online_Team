import { FaqDropdown } from "../../../shared/faq-dropdown/FaqDropdown";
import { Timetable } from "../../../shared/timetable/Timetable";
import "./info.css";

export const Info = () => {
	return (
		<section className="inner-wrapper">
			<div className="wrapper">
				<div className="info-hero">
					<div className="info-header">
						<h1>Info</h1>
						<div className="info-header-image">
							{/* Add image collage here */}
						</div>
					</div>
				</div>

				<div className="info-content">
					<div className="section">
						<h2>Shift festival 2025</h2>
						<p>
							Welkom bij Shift, de expo waar innovatie, design en creativiteit
							samenkomen! Dit unieke festival biedt een podium aan de
							afstudeerprojecten van onze derdejaarsstudenten, waarbij
							baanbrekende ideeën en vernieuwende technologieën worden
							gepresenteerd. Daarnaast worden ook de beste werken van studenten
							uit alle jaren tentoongesteld.
						</p>
						<p>
							Het evenement is niet alleen een viering van talent, maar ook een
							inspiratiemoment voor toekomstige studenten. Overweeg je een
							studie in deze richting? Dan is dit dé perfecte kans om de sfeer
							te proeven, in gesprek te gaan met studenten en docenten, en te
							ontdekken wat onze opleiding te bieden heeft.
						</p>
						<p>
							Bovendien zullen vertegenwoordigers van bedrijven aanwezig zijn,
							wat dit event ook een uitstekende netwerkmogelijkheid maakt voor
							iedereen die geïnteresseerd is in de creatieve en technologische
							sector.
						</p>
					</div>

					<div className="section event-info">
						<div className="event-info-container">
							<div className="event-map">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10077.608242914135!2d4.312529734260982!3d50.84223854859857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c40f19faf0f9%3A0x4ef5b683135ecb1e!2sErasmushogeschool%20Brussel!5e0!3m2!1sfr!2sbe!4v1749650385480!5m2!1sfr!2sbe&style=feature:all|element:labels.text.fill|color:0xffffff&style=feature:all|element:labels.text.stroke|color:0x000000&style=feature:water|element:geometry|color:0x0f252e&style=feature:landscape|element:geometry|color:0x222222&style=feature:poi|element:geometry|color:0x2a2a2a&style=feature:road.highway|element:geometry|color:0x333333"
									width="100%"
									height="300"
									style={{ border: 0, borderRadius: "12px" }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								/>
							</div>
							<div className="event-details">
								<h2 className="event-date">20 juni 2025</h2>
								<div className="event-location">
									<p>Nijverheidskaai 170, 1070 Brussel</p>
									<p>Campus Kaai</p>
									<p>Gratis, maar inschrijven verplicht</p>
									<p>17:00 - 22:00</p>
								</div>
							</div>
						</div>
					</div>

					<section className="orange-wrapper">
						<div className="inner-wrapper">
							<div className="section awards">
								<div className="award-item">
									<div className="award-placeholder">
										<div className="cross-lines"></div>
									</div>
									<h3>Juryprijs</h3>
									<p>
										De Juryprijs wordt uitgereikt door onze eigen docenten met
										hun jaren ervaring en kennis. Ze zoeken naar een duidelijke
										visie, met veel creativiteit en afwerking. En volgens hen
										was de keuze niet makkelijk.
									</p>
								</div>
								<div className="award-item">
									<div className="award-placeholder">
										<div className="cross-lines"></div>
									</div>
									<h3>Publieksprijs</h3>
									<p>
										De Publieksprijs werd bepaald door de stemmen van jullie –
										het publiek. Jullie kregen allemaal de kans om te stemmen op
										jullie favoriete projecten. Nu gaan we zien welke 3 dat
										waren
									</p>
								</div>
								<div className="award-item">
									<div className="award-placeholder">
										<div className="cross-lines"></div>
									</div>
									<h3>Innovatieprijs</h3>
									<p>
										De Innovatieprijs bekroont het meest vernieuwende technische
										project. Een project dat niet alleen creatief is, maar ook
										technisch uitdagend. Waarin grenzen worden verlegd.
									</p>
								</div>
								<div className="award-item">
									<div className="award-placeholder">
										<div className="cross-lines"></div>
									</div>
									<h3>Impactprijs</h3>
									<p>
										Deze gaat naar het project dat de grootste maatschappelijke
										impact maakt en het meest potentieel heeft om echte
										veranderingen te maken in de wereld
									</p>
								</div>
							</div>
						</div>
					</section>

					<Timetable />

					<div className="section">
						<h2>FAQ</h2>
						<FaqDropdown />
					</div>
				</div>
			</div>
		</section>
	);
};
