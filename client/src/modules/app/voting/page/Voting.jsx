import { useState } from "react";
import { CategorySelector } from "../components/CategorySelector";
import { CategorySection } from "../components/CategorySection";

export const Voting = () => {
	document.title = "Voting | Expo 2025";

	const [selected, setSelected] = useState(null);

	const data = {
		"App / Web": new Array(10).fill({
			projectName: "Projectnaam",
			name: "Naam",
		}),
		"Game / AR / VR": new Array(7).fill({
			projectName: "Projectnaam",
			name: "Naam",
		}),
		"Installatie / Prototyping": new Array(4).fill({
			projectName: "Projectnaam",
			name: "Naam",
		}),
		"Motion graphics": new Array(5).fill({
			projectName: "Projectnaam",
			name: "Naam",
		}),
	};

	const handleSelect = (category) => {
		if (selected === category) {
			setSelected(null);
		} else {
			setSelected(category);
		}
	};

	return (
		<div>
			<h2>Stem op jouw favoriete project</h2>
			<CategorySelector selected={selected} onSelect={handleSelect} />

			{}
			{(selected ? [[selected, data[selected]]] : Object.entries(data)).map(
				([category, projects]) => (
					<CategorySection
						key={category}
						title={category}
						projects={projects}
					/>
				)
			)}
		</div>
	);
};
