import clsx from "clsx";
import { useState } from "react";

//CSS
import styles from "./faqDropdown.module.scss"

const faqData = [
    {
        question: "Wat is Shift?",
        answer:
            "De Shift EXPO is een tentoonstelling van eindprojecten van studenten met workshops, awardshows en meer.",
    },
    {
        question: "Waar is Shift?",
        answer:
            "Op de campus van Erasmushogeschool Brussel, Nijverheidskaai 170, 1070 Anderlecht.",
    },
    {
        question: "Hoe bereik ik Shift?",
        answer:
            "De campus is makkelijk bereikbaar met het openbaar vervoer. Vlakbij station Brussel-Zuid.",
    },
    {
        question: "Waar kan ik mijn auto parkeren?",
        answer:
            "Er is een parking beschikbaar op de campus van de school. Volg de borden of meld je aan bij het onthaal bij aankomst.",
    },
];

export const FaqDropdown = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
		<div>
			{faqData.map((item, index) => (
				<div
					className={clsx(styles["faq-wrapper"])}
					key={index}
				>
					<button
						onClick={() => toggle(index)}
						
					>
						<span>{item.question}</span>
						<svg
							style={{
								transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
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
						<div className={clsx(styles["faq-drop-info"])}
						>
                            <p>{item.answer}</p>
						</div>
					)}
				</div>
			))}
		</div>
	);
};