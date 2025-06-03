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
					<p>16:00</p>
					<h2 className="program-title">open deur</h2>
					<img className="program-img" src="/homepage-image.png" alt="" />
				</div>
			</section>
		</>
	);
};
