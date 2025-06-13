import React from "react";
import { useParams } from "react-router-dom";
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";
import { NextProject } from "../components/NextProject";
import "../components/NextProject.css";
import { Magazine } from "../../magazine";

export const ProjectsDetail = () => {
	const { projectId } = useParams();
	const { data: projects = [], isLoading } = useProjectsData();

	const project = projects.find((p) => String(p.id) === String(projectId));
	const allProjects = projects;

	return (
		<section className="project-detail-page">
			<div className="inner-wrapper">
				{isLoading ? (
					"Loading..."
				) : project ? (
					<>
						<NextProject currentId={projectId} projects={allProjects} />
						<div className="image">
							<div className="banner-image">
								<img
									className="banner-image__photo"
									src="/homepage-image.png"
									alt="Project banner"
								/>

								<div className="badge">
									{/* load your Figma-exported SVG from public */}
									<img
										className="badge__shape"
										src="/badge.svg"
										alt="Badge background"
									/>

									{/* overlay HTML text */}
									<div className="badge__text">
										<h2>{project.student}</h2>
										<h3>{project.project_name}</h3>
									</div>
								</div>
							</div>
						</div>

						<p>{project.description}</p>
						<Magazine></Magazine>
					</>
				) : (
					"Project not found"
				)}
			</div>
		</section>
	);
};
