import { ProjectCard } from "../../../shared/ProjectCard/ProjectCard";

export const CategorySection = ({ title, projects }) => {
	return (
		<section style={{ margin: "60px 0", padding: 0 }}>
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
					<ProjectCard key={i} projectName={p.projectName} name={p.name} />
				))}
			</div>
		</section>
	);
};
