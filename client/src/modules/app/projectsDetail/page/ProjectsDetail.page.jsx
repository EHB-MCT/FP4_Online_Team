import React from "react";
import { useParams } from "react-router-dom";
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";
import { NextProject } from "../components/NextProject";

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
							<div className="banner-circle"></div>
						</div>

						<h1>{project.project_name}</h1>
						<p>{project.description}</p>
					</>
				) : (
					"Project not found"
				)}
			</div>
		</section>
	);
};
