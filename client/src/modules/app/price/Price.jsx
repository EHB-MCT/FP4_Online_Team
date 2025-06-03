import "./Price.css";

const Price = () => {
	document.title = "Expo 2025 | Prijzen ";

	return (
		<>
			<section className="hero-wrapper">
				<div className="inner-wrapper hero">
					<h1 id="quick-info">Prijzen </h1>
					<p>
						Op deze pagina presenteren we met trots de drie bijzondere prijzen die worden uitgereikt aan initiatieven die écht het verschil maken. De Publieksprijs, gekozen door het publiek, de Juryprijs, toegekend door een deskundige vakjury, en de
						Impactprijs, voor het initiatief met de grootste maatschappelijke impact. <br />
						<br /> Lees verder en ontdek wie dit jaar in de spotlight staan!{" "}
					</p>
				</div>
			</section>
			<section className="inner-wrapper">
				<h2>Publiekprijs</h2>
				<div className="price-div ">
					<div>
						<p>
							Deze prijs gaat naar het favoriete project van het live publiek tijdens Expo24. Elke bezoeker aan het event mag stemmen op drie projecten waar hij of zij bijzonder enthousiast over is: originele animatie of VR beelden, prachtige
							installaties, slimme apps en sites, goeie interactieve storytelling, ... De student van het project met het meeste aantal stemmen mag de publieksprijs mee naar huis nemen.
						</p>
					</div>
					<div>
						<img className="price-img" src="/homepage-image.png" alt="" />
					</div>
				</div>
				<h2>Juryprijs</h2>
				<div className="price-div inner-wrapper">
					<div>
						<p>
							De 'Juryprijs' wordt toegekend door een multidisciplinair team van docenten aan een project waarin de passie en vaardigheden van de Multimedia-student onmiskenbaar zichtbaar zijn. De prijs is een erkenning voor toewijding, toepassing en
							creativiteit. De student die wint, heeft zich getoond als een uitzonderlijke multimedia-professional met een eigen innovatieve benadering.
						</p>
					</div>
					<div>
						<img className="price-img" src="/homepage-image.png" alt="" />
					</div>
				</div>

				<h2>Innovatieprijs</h2>
				<div className="price-div inner-wrapper">
					<div>
						<p>
							De 'Innovatieprijs' beloont vernieuwende ideeën, producten of oplossingen die een aantoonbare technologische vernieuwing bevatten en bijdragen aan vooruitgang binnen een vakgebied of sector. De focus ligt op de technische uitwerking en
							het innovatieve karakter van de toepassing.
						</p>
					</div>
					<div>
						<img className="price-img" src="/homepage-image.png" alt="" />
					</div>
				</div>
				<h2>Impactprijs</h2>
				<div className="price-div inner-wrapper">
					<div>
						<p>
							De 'Impactprijs' beloont initiatieven, projecten of innovaties die aantoonbare positieve effecten hebben op de maatschappij. De nadruk ligt op de mate waarin het idee bijdraagt aan maatschappelijke vooruitgang, het welzijn van mensen of
							het oplossen van maatschappelijke uitdagingen.
						</p>
					</div>
					<div>
						<img className="price-img" src="/homepage-image.png" alt="" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Price;
