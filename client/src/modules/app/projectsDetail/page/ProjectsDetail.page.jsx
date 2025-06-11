import React from "react";
import { useParams } from "react-router-dom";
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";
import { NextProject } from "../components/NextProject";
import "../components/NextProject.css";
import { Magazine } from "../../magazine";
import BadgeSvg from "/badge.svg";

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
						<div className="top-title">
							<h1>{project.project_name}</h1>
							<h3>{project.student}</h3>
						</div>

						<NextProject currentId={projectId} projects={allProjects} />
						<div className="image">
							<div className="banner-image">
								<img src="/homepage-image.png" alt="" />
							</div>
						</div>

						<Magazine></Magazine>
					</>
				) : (
					"Project not found"
				)}
			</div>
		</section>
	);
};
