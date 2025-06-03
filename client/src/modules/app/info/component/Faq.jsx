import { useState } from "react";

const faqData = [
	{
		question: "Wat is de Shift EXPO?",
		answer:
			"De Shift EXPO is een tentoonstelling van eindprojecten van studenten met workshops, awardshows en meer.",
	},
	{
		question: "Waar is de Shift EXPO?",
		answer:
			"Op de campus van Erasmushogeschool Brussel, Nijverheidskaai 170, 1070 Anderlecht.",
	},
	{
		question: "Hoe bereik ik de Shift EXPO?",
		answer:
			"De campus is makkelijk bereikbaar met het openbaar vervoer. Vlakbij station Brussel-Zuid.",
	},
	{
		question: "Waar kan ik mijn auto parkeren?",
		answer:
			"Er is een parking beschikbaar op de campus van de school. Volg de borden of meld je aan bij het onthaal bij aankomst.",
	},
];

export const Faq = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div>
			{faqData.map((item, index) => (
				<div
					key={index}
					style={{
						border: "1px solid",
					}}
				>
					<button
						onClick={() => toggle(index)}
						style={{
							width: "100%",
							textAlign: "left",
							padding: "15px 20px",
							backgroundColor: "#fff",
							border: "none",
							cursor: "pointer",
							fontSize: "16px",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<span>{item.question}</span>
						<svg
							style={{
								width: "24px",
								height: "24px",
								transform:
									openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
								transition: "transform 0.3s",
							}}
							viewBox="0 0 24 24"
							fill="none"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polyline points="6 9 12 15 18 9" />
						</svg>
					</button>
					{openIndex === index && (
						<div
							style={{
								padding: "10px 20px",
								backgroundColor: "#f9f9f9",
								borderTop: "1px solid #ccc",
							}}
						>
							{item.answer}
						</div>
					)}
				</div>
			))}
		</div>
	);
};
