import { NavLink } from "react-router";
import clsx from "clsx";

//CSS
import styles from "./projectCard.module.scss";
import { useEffect, useState } from "react";


export const ProjectCard = ({ project_name, student, banner_image, project_category }) => {

	const [projectColor, setProjectColor] = useState("")

	useEffect(() => {

		if(project_category === "Experience Design"){
			setProjectColor("#5269BC")
		}else if(project_category === "Web & Mobile"){
			setProjectColor("#E61453")
		}else if(project_category === "XR & 3D"){
			setProjectColor("#B54A98")
		}else if(project_category === "Digital Design"){
			setProjectColor("#D83D0E")
		}

	}, []);
    return (
        <NavLink to={ "#" }>
			<div className={clsx(styles["card-wrapper"])}>
				<div className={clsx(styles["card-wrapper--image-wrapper"])}>
					<img src={banner_image} alt="image of project" />
				</div>
				<div className={clsx(styles["card-wrapper--student-info"])}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268 121" fill="none">
						<path d="M256.716 0H67.3581C61.1255 0 56.0737 5.34935 56.0737 11.9391V42.4653C56.0737 49.0551 51.0218 54.4045 44.7892 54.4045H11.2844C5.05186 54.4045 0 59.7538 0 66.3436V109.022C0 115.612 5.05186 120.961 11.2844 120.961H50.2476C56.4801 120.961 61.532 115.612 61.532 109.022V75.0266C61.532 68.4368 66.5838 63.0875 72.8164 63.0875H256.716C262.948 63.0875 268 57.7381 268 51.1483V11.9391C268 5.34935 262.948 0 256.716 0Z" fill={ projectColor }/>
					</svg>
					
					<div className={clsx(styles["card-wrapper--student-info--right-shape"])} >
						<p>{ project_name }</p>
					</div>
				</div>
			</div>
		</NavLink>
	);
};
