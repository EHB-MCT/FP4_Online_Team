import clsx from "clsx";
import { useState } from "react";

//CSS
import styles from "./faqDropdown.module.scss"

const faqData = [
    {
        question: "Wat is Shift?",
        answer:
           `De Shift EXPO is een <strong>tentoonstelling van afstudeerprojecten </strong> van onze derdejaarsstudenten, aangevuld met workshops, awardshows en meer.`
    },
    {
        question: "Waar vind Shift plaats?",
        answer:
            `Shift gaat door op <strong>Campus Kaai</strong> van de Erasmushogeschool Brussel, gelegen aan de <strong>Nijverheidskaai 170, 1070 Anderlecht</strong>. Deze campus ligt vlak bij het kanaal en is vlot bereikbaar met de auto, fiets en het openbaar vervoer.`,
    },
    {
        question: "Hoe bereik ik Shift?",
        answer:
            `
				Campus Kaai is vlot bereikbaar met het openbaar vervoer. De campus ligt op 20 minuten wandelen van station Brussel-Zuid, of op slechts 5 minuten stappen van metrostation Delacroix (lijn 2 of 6), rechtstreeks bereikbaar vanuit het Zuidstation.
			`,
    },
    {
        question: "Waar kan ik mijn auto parkeren?",
        answer:
            `
				Er zijn drie parkings beschikbaar: <br>
				<ul> 
					<li>
						<strong>Parking 1:</strong> vooraan de campus, inclusief 2 plaatsen voor personen met beperkte mobiliteit.
					</li>
					<li>
						<strong>Parking 2:</strong> achteraan.
					</li> 
					<li>
						<strong>Parking Abattoir:</strong> op wandelafstand van de campus. Dit is een publieke, betalende parking met ruime capaciteit.
					</li>
				</ul>
			`,
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
						<div className={clsx(styles["faq-drop-info"])}>
							<p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
						</div>
					)}
				</div>
			))}
		</div>
	);
};