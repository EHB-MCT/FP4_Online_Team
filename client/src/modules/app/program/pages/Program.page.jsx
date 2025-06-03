import PlanCarousel from "../components/PlanCarousel";
import "./Program.css";

export const Program = () => {
	document.title = "Expo 2025 | Programma ";

	return (
		<>
			<section className="title-wrapper">
				<div className="inner-wrapper hero">
					<h1 id="quick-info">Programma </h1>
				</div>
			</section>
			<section className="inner-wrapper programs">
				<div className="program-container">
					<p>16:00</p>
					<h2 className="program-title">open deur</h2>
					<img className="program-img" src="/homepage-image.png" alt="" />
				</div>
				<div className="program-container">
					<p>17:00</p>
					<h2 className="program-title">Workshops</h2>
					<img className="program-img" src="/homepage-image.png" alt="" />
				</div>
				<div className="program-container">
					<p>17:30</p>
					<h2 className="program-title">Eindwerken</h2>
					<img className="program-img" src="/homepage-image.png" alt="" />
				</div>
				<div className="program-container">
					<p>20:00</p>
					<h2 className="program-title">Awards</h2>
					<img className="program-img" src="/homepage-image.png" alt="" />
				</div>
			</section>
			<section className="inner-wrapper">
                <h2>Plattegrond</h2>
				<PlanCarousel />
			</section>
		</>
	);
};
