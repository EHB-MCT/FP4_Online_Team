import "./Program.css";
import { useState } from "react";

export const Program = () => {
	document.title = "Expo 2025 | Programma ";
	const [activePopup, setActivePopup] = useState(null);

	const togglePopup = (index) => {
		setActivePopup(activePopup === index ? null : index);
	};

	return (
		<>
			<section className="inner-wrapper">
				<section className="title-wrapper">
					<h1 style={{ color: "black" }}>Programma</h1>
				</section>
				<section className="inner-wrapper programs">
					<div className="program-container">
						<h2>16:00</h2>
						<div className="program-title" style={{ backgroundColor: "#e61453" }}>
							<h3>Opening deuren van het onthaal</h3>
							<img src="/info-icon.svg" alt="" onMouseOver={() => togglePopup(0)} />
							{activePopup === 0 && (
								<div className="popup">
									<div className="popup-content" style={{ backgroundColor: "#e61453" }} onMouseLeave={() => togglePopup(0)}>
										<h3> Medialab</h3>
										<p>Welkom bij de opening van het onthaal! Hier begint jouw Expo 2025 ervaring.</p>
											<span className="close" onClick={togglePopup}>
										&times;
									</span>
									</div>
								
								</div>
							)}
						</div>
						<img className="program-img" src="/homepage-image.png" alt="Programma afbeelding" />
					</div>

					<div className="program-container">
						<h2>16:00 - 19:30</h2>
						<div className="program-title" style={{ backgroundColor: "#C169AA" }}>
							<h3>Eindwerken derdejaars</h3>
							<img src="/info-icon.svg" alt="" onMouseOver={() => togglePopup(1)} />
							{activePopup === 1 && (
								<div className="popup">
									<div className="popup-content" style={{ backgroundColor: "#C169AA" }} onMouseLeave={() => togglePopup(1)}>
										<h3> Medialab</h3>
										<p>
											Loop doorheen de campus om alle eindprojecten van de derde jaars te zien, en vote nadien op je favoriete project bij de voting
											machine.
										</p>
										<span className="close" onClick={togglePopup}>
											&times;
										</span>
									</div>
								</div>
							)}
						</div>
						<img className="program-img" src="/homepage-image.png" alt="" />
					</div>

					<div className="program-container">
						<h2>17:00 - 18:00</h2>
						<div className="program-title" style={{ backgroundColor: "#EC6230" }}>
							<h3>Showcase keychain</h3>
							<img src="/info-icon.svg" alt="" onMouseOver={() => togglePopup(2)} />
							{activePopup === 2 && (
								<div className="popup">
									<div className="popup-content" style={{ backgroundColor: "#EC6230" }} onMouseLeave={() => togglePopup(2)}>
										<h3> Medialab</h3>
										<p>Ontdek innovatieve ontwerpen tijdens de keychain showcase!</p>
										<span className="close" onClick={togglePopup}>
											&times;
										</span>
									</div>
								</div>
							)}
						</div>
						<img className="program-img" src="/homepage-image.png" alt="" />
					</div>

					<div className="program-container">
						<h2>17:00 - 18:00</h2>
						<div className="program-title" style={{ backgroundColor: "#667BC4" }}>
							<h3>Workshop Shift your reality</h3>
							<img src="/info-icon.svg" alt="" onMouseOver={() => togglePopup(3)} />
							{activePopup === 3 && (
								<div className="popup">
									<div className="popup-content" style={{ backgroundColor: "#667BC4" }} onMouseLeave={() => togglePopup(3)}>
										<h3> Medialab</h3>
										<p>Spring in een andere werkelijkheid en hou deze ervaring bij in de vorm van een foto.</p>
									</div>
									<span className="close" onClick={togglePopup}>
										&times;
									</span>
								</div>
							)}
						</div>
						<img className="program-img" src="/homepage-image.png" alt="" />
					</div>

					<div className="program-container">
						<h2>19:30</h2>
						<div className="program-title" style={{ backgroundColor: "#C169AA" }}>
							<h3>Awardshow derdejaars</h3>
							<img src="/info-icon.svg" alt="" onMouseOver={() => togglePopup(4)} />
							{activePopup === 4 && (
								<div className="popup">
									<div className="popup-content" style={{ backgroundColor: "#C169AA" }} onMouseLeave={() => togglePopup(4)}>
										<h3> Agora</h3>
										<p>Bij deze awardshow worden meerdere prijzen uitgedeeld aan de beste projecten van de derdejaars </p>
									</div>
									<span className="close" onClick={togglePopup}>
										&times;
									</span>
								</div>
							)}
						</div>
						<img className="program-img" src="/homepage-image.png" alt="" />
					</div>
				</section>
			</section>
		</>
	);
};
