import { useState } from "react";
import { ProjectCard } from "../../../shared/ProjectCard/ProjectCard";

const sampleProjects = [
	{ projectName: "ShiftVR", name: "First Person" },
	{ projectName: "FoodApp", name: "Second" },
	{ projectName: "EcoMotion", name: "Third" },
	{ projectName: "CodeCraft", name: "Forth" },
	{ projectName: "ArtGen", name: "Fifth" },
];

const VISIBLE_COUNT = 3;

const Carousel = () => {
	const [start, setStart] = useState(0);

	const handlePrev = () => {
		setStart((prev) =>
			prev === 0 ? sampleProjects.length - VISIBLE_COUNT : prev - 1
		);
	};

	const handleNext = () => {
		setStart((prev) =>
			prev >= sampleProjects.length - VISIBLE_COUNT ? 0 : prev + 1
		);
	};

	const visibleProjects = sampleProjects.slice(start, start + VISIBLE_COUNT);

	return (
		<div style={styles.wrapper}>
			<svg
				onClick={handlePrev}
				style={{
					...styles.arrowIcon,
					transform: "rotate(90deg)",
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

			<div style={styles.track}>
				{visibleProjects.map((p, i) => {
					const isCenter = i === Math.floor(VISIBLE_COUNT / 2);
					return (
						<div
							key={`${p.projectName}-${p.name}`}
							style={{
								position: "relative",
								zIndex: isCenter ? 2 : 1,
								transform: isCenter ? "scale(1.08)" : "scale(0.95)",
								marginLeft: i > 0 ? "-60px" : "0",
								opacity: isCenter ? 1 : 0.85,
							}}
						>
							<ProjectCard
								id={ p.id }
								projectName={p.projectName}
								name={p.name}
								highlighted={isCenter}
							/>
						</div>
					);
				})}
			</div>

			<svg
				onClick={handleNext}
				style={{
					...styles.arrowIcon,
					transform: "rotate(-90deg)",
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
		</div>
	);
};

const styles = {
	wrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "10px",
	},

	track: {
		display: "flex",
		position: "relative",
		alignItems: "center",
		gap: "0",
	},

	arrowIcon: {
		width: "28px",
		height: "28px",
		cursor: "pointer",
		transition: "transform 0.3s",
		margin: "0 15px",
	},
};

export default Carousel;
