import { useRef } from "react";
// import { Faq } from "../component/Faq";
export const Info = () => {
	// Refs for each block
	const opleidingRef = useRef(null);
	const expoRef = useRef(null);
	const faqRef = useRef(null);

	const handleScroll = (target) => {
		if (target === "opleiding")
			opleidingRef.current?.scrollIntoView({ behavior: "smooth" });
		if (target === "expo")
			expoRef.current?.scrollIntoView({ behavior: "smooth" });
		if (target === "faq")
			faqRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="inner-wrapper">
			<div className="wrapper">
				<h1 style={{ textAlign: "center" }}>Info</h1>

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						gap: "20px",
						margin: "30px 0",
						flexWrap: "wrap",
					}}
				>
					<button onClick={() => handleScroll("opleiding")}>Opleiding</button>
					<button onClick={() => handleScroll("expo")}>Shift EXPO</button>
					<button onClick={() => handleScroll("faq")}>FAQ</button>
				</div>

				<div
					ref={opleidingRef}
					style={{ margin: "70px 0px", textAlign: "center" }}
				>
					<h2>Opleiding</h2>
					<p>
						Wil je leren programmeren en ontwerpen om zelf je websites en apps
						te maken?
					</p>
					<p>
						Interesse in het maken van 3D games voor Virtual Reality of
						Metaverse?
					</p>
					<p>
						Wil je kunnen vliegen en filmen met drones of een virtuele
						filmstudio maken?
					</p>
					<p>
						Zou je graag Motion Graphics kunnen maken en videobeelden monteren
						en bewerken?
					</p>
					<p>
						<a
							href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-en-creatieve-technologie"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								color: "black",
								textDecoration: "underline",
								fontWeight: "bold",
							}}
						>
							Ontdek meer over onze opleiding.
						</a>
					</p>
				</div>

				<div ref={expoRef} style={{ margin: "70px 0px", textAlign: "center" }}>
					<h2>Shift expo</h2>
					<p>Welkom bij de Shift EXPO!</p>
					<p>
						Ontdek de eindprojecten van afstuderende studenten in diverse
						categorieën. Naast de showcase, waar je alle werken ook online kunt
						bekijken bieden we boeiende workshops over AI, VR en zo veel meer.
					</p>
					<p>
						Geniet van een gezellige bar en beleef de spannende awardshow, waar
						de beste projecten in de spotlight staan! De Shift EXPO is gratis
						toegankelijk voor iedereen. Breng gerust vrienden of familie mee!
					</p>
				</div>

				<div ref={faqRef} style={{ margin: "70px 0px" }}>
					<h2 style={{ textAlign: "center" }}>FAQ</h2>
					{/* <Faq /> */}
				</div>
			</div>
		</section>
	);
};
