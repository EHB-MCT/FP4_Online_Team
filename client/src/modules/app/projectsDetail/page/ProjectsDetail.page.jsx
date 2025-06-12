import clsx from "clsx";
import React from "react";

//Components
import { NextProject } from "../components/NextProject";

//CSS
import styles from "./projectDetail.module.scss"

export const ProjectsDetail = () => {
	return (
		<>
			<section className={clsx(styles["project-detail-wrapper"])}>
				<div className="inner-wrapper">
					<NextProject />
				</div>
			</section>
		</>
	);
};
