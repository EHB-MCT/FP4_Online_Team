import { ProjectCard } from "../../../shared/ProjectCard/ProjectCard";

export const CategorySection = ({ title, projects }) => {
	return (
		<section className="project-catergory-section">
			<h4
				style={{ textAlign: "center", fontSize: "20px", marginBottom: "20px" }}
			>
				{title}
			</h4>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				{projects.map((p, i) => (
					<ProjectCard key={i} id={p.id} projectName={p.projectName} name={p.name} />
				))}
			</div>
		</section>
	);
};
