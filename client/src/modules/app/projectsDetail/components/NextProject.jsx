import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./NextProject.css";

export const NextProject = () => {
	return (
		<div className="large-container">
			<FaArrowLeft />
			<div className="small-container">
				<h2>Volgende project</h2>

				<FaArrowRight />
			</div>
		</div>
	);
};
