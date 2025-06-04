import React from "react";
import { useParams } from "react-router-dom";
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";
import { NextProject } from "../components/NextProject";
import "../components/NextProject.css";

export const ProjectsDetail = () => {
	const { projectId } = useParams();
	const { data: projects = [], isLoading } = useProjectsData();

	const project = projects.find((p) => String(p.id) === String(projectId));
	const allProjects = projects;

	return (
		<section>
			<div className="inner-wrapper">
				{isLoading ? (
					"Loading..."
				) : project ? (
					<>
						<NextProject currentId={projectId} projects={allProjects} />
						<div className="image">
							<div className="banner-image">
								<img src="/homepage-image.png" alt="" />
							</div>
							<div className="banner-circle">
								{" "}
								<img src="/homepage-image.png" alt="" />
							</div>
						</div>

						<h1>{project.student}</h1>
						<h3>{project.project_name}</h3>
						<p>{project.description}</p>
					</>
				) : (
					"Project not found"
				)}
			</div>
		</section>
	);
};
