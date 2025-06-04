import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import { NextProject } from "../components/NextProject";
import "../components/NextProject.css";

//Hooks
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";
import { VoteButtonsWrapper } from "../components/VoteButtonsWrapper";

export const ProjectsDetail = () => {
	const { projectId } = useParams();
	const { data: projects = [], isLoading } = useProjectsData();

	const [validated, setValidated] = useState(false);

	const project = projects.find((p) => String(p.id) === String(projectId));
	const allProjects = projects;

	useEffect(() => {
		const storage = localStorage.getItem("user")
		if (!storage) return;

		const parsedStorage = JSON.parse(storage);
		console.log(parsedStorage);

		if(parsedStorage.validated){
			setValidated(true);
		}
	}, [])

	return (
		<>
			<section>
				<div className="inner-wrapper">
					{isLoading ? (
						"Loading..."
					) : project ? (
						<>
							<NextProject currentId={projectId} projects={allProjects} />
							<div className="student-project-warpper">
								{validated !== false && <VoteButtonsWrapper />}
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
							</div>
						</>
					) : (
						"Project not found"
					)}
				</div>
			</section>
		</>
	);
};
