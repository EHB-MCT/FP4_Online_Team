import "./Program.css";
import { useState } from "react";
export const Program = () => {
	document.title = "Expo 2025 | Programma ";
	const [showPopup, setShowPopup] = useState(false);

	const togglePopup = () => {
		setShowPopup(!showPopup);
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
						<div className="program-title">
							<h3>Opening deuren van het onthaal </h3>
							<img src="/logo-placeholder-image.png" alt="" onClick={togglePopup} style={{ cursor: "pointer" }} />
						</div>

						<img className="program-img" src="/homepage-image.png" alt="Programma afbeelding" />

						{showPopup && (
							<div className="popup">
								<div className="popup-content">
									<span className="close" onClick={togglePopup}>
										&times;
									</span>
									<p>Welkom bij de opening van het onthaal! Hier begint jouw Expo 2025 ervaring.</p>
								</div>
							</div>
						)}
					</div>
					<div className="program-container">
						<h2>16:00 - 19:30</h2>
						<h3 className="program-title" style={{ backgroundColor: "#C169AA" }}>
							Eindwerken
						</h3>
						<img className="program-img" src="/homepage-image.png" alt="" />
					</div>
					<div className="program-container">
						<h2>17:00 - 18:00</h2>
						<h3 className="program-title" style={{ backgroundColor: "#EC6230" }}>
							Showcase keychain
						</h3>
						<img className="program-img" src="/homepage-image.png" alt="" />
					</div>
					<div className="program-container">
						<h2>17:00 - 18:00</h2>
						<h3 className="program-title" style={{ backgroundColor: "#667BC4" }}>
							Workshop Shift Your reality
						</h3>
						<img className="program-img" src="/homepage-image.png" alt="" />
					</div>
					<div className="program-container">
						<h2>19:30</h2>
						<h3 className="program-title" style={{ backgroundColor: "#C169AA" }}>
							Award show
						</h3>
						<img className="program-img" src="/homepage-image.png" alt="" />
					</div>
				</section>
			</section>
		</>
	);
};
