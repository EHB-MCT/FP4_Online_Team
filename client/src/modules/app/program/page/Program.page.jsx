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
							<img src="/logo-placeholder-image.png" alt="" onClick={() => togglePopup(0)} style={{ cursor: "pointer" }} />
							{activePopup === 0 && (
								<div className="popup">
									<div className="popup-content" style={{ backgroundColor: "#e61453" }}>
										<span className="close" onClick={() => togglePopup(0)}>
											&times;
										</span>
										<p>Welkom bij de opening van het onthaal! Hier begint jouw Expo 2025 ervaring.</p>
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
							<img src="/logo-placeholder-image.png" alt="" onClick={() => togglePopup(1)} style={{ cursor: "pointer" }} />
							{activePopup === 1 && (
								<div className="popup">
									<div className="popup-content" style={{ backgroundColor: "#C169AA" }}>
										<span className="close" onClick={() => togglePopup(1)}>
											&times;
										</span>
										<p>Bekijk de eindwerken van onze studenten in deze doorlopende tentoonstelling.</p>
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
							<img src="/logo-placeholder-image.png" alt="" onClick={() => togglePopup(2)} style={{ cursor: "pointer" }} />
							{activePopup === 2 && (
								<div className="popup">
									<div className="popup-content" style={{ backgroundColor: "#EC6230" }}>
										<span className="close" onClick={() => togglePopup(2)}>
											&times;
										</span>
										<p>Ontdek innovatieve ontwerpen tijdens de keychain showcase!</p>
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
							<img src="/logo-placeholder-image.png" alt="" onClick={() => togglePopup(3)} style={{ cursor: "pointer" }} />
							{activePopup === 3 && (
								<div className="popup">
									<div className="popup-content" style={{ backgroundColor: "#667BC4" }}>
										<span className="close" onClick={() => togglePopup(3)}>
											&times;
										</span>
										<p>Een interactieve workshop over de kracht van perceptie en creativiteit.</p>
									</div>
								</div>
							)}
						</div>
						<img className="program-img" src="/homepage-image.png" alt="" />
					</div>

					<div className="program-container">
						<h2>19:30</h2>
						<div className="program-title" style={{ backgroundColor: "#C169AA" }}>
							<h3>Awardshow derdejaars</h3>
							<img src="/logo-placeholder-image.png" alt="" onClick={() => togglePopup(4)} style={{ cursor: "pointer" }} />
							{activePopup === 4 && (
								<div className="popup">
									<div className="popup-content" style={{ backgroundColor: "#C169AA" }}>
										<span className="close" onClick={() => togglePopup(4)}>
											&times;
										</span>
										<p>Bedankt voor je aanwezigheid! We hopen je snel terug te zien.</p>
									</div>
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
