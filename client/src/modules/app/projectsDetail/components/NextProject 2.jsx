import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./NextProject.css";

export const NextProject = ({ currentId, projects }) => {
	const navigate = useNavigate();

	const currentIndex = projects.findIndex(
		(p) => String(p.id) === String(currentId)
	);
	const prevProject = projects[currentIndex - 1];
	const nextProject = projects[currentIndex + 1];
	console.log({ currentId, projects, currentIndex, prevProject, nextProject });
	return (
		<div className="large-container">
			{prevProject && (
				<FaArrowLeft
					onClick={() => navigate(`/projects/${prevProject.id}`)}
					style={{ cursor: "pointer" }}
				/>
			)}
			<div className="small-container">
				<h2>Volgende project</h2>
				{nextProject && (
					<FaArrowRight
						onClick={() => navigate(`/projects/${nextProject.id}`)}
						style={{ cursor: "pointer" }}
					/>
				)}
			</div>
		</div>
	);
};
