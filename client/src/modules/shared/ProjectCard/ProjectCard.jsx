//CSS
import { NavLink } from "react-router";
import styles from "./projectCard.module.css";

export const ProjectCard = ({ projectName, name, banner_image }) => {
	return (
		<div className={styles.card}>
			<div className={styles.textBox_upper}>
				<p className={styles.projectName}>
					<strong>{projectName}</strong>
				</p>
			</div>
			<div className={styles.banner_image}>
				<img src={banner_image} alt="image of project" />
			</div>
			<div className={styles.textBox_lower}>
				<p className={styles.name}>{name}</p>
			</div>
		</div>
	);
};
