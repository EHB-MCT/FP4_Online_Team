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
        
		<div className={clsx(styles["card-wrapper"])}>
			<NavLink to={ "#" }>
				{/* <div className={clsx(styles["card-wrapper--image-wrapper"])}>
					<img className={clsx(styles["card-wrapper--image-wrapper--image"])} src={"temp.png"} alt="image of project"  />
				</div> */}
				<div className={clsx(styles["card-wrapper__image-wrapper"])}>
					<img 
                        className={clsx(styles["card-wrapper__image-wrapper__image"])} 
                        // src={banner_image || "temp-card/temp.png"} 
						src={"temp-card/temp.png"}
                        alt={`Project: ${project_name}`}  
                    />
                </div>
				<div className={clsx(styles["card-wrapper--student-info"])}>	
					<p className="black-text">{ student }</p>			
					<div className={clsx(styles["card-wrapper--student-info--bottom-wrapper"])} >
						<h5 className="black-text">{ project_name }</h5>
						<div className={clsx(styles["card-wrapper--student-info--bottom-wrapper--svg-wrapper"])}>
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 59 59" fill="none">
								<path 
									d="M9.83334 27.0417L9.83334 31.9584L39.3333 31.9584L39.3333 36.8751L44.25 36.8751L44.25 31.9584L49.1667 31.9584L49.1667 27.0417L44.25 27.0417L44.25 22.1251L39.3333 22.1251L39.3333 27.0417L9.83334 27.0417ZM34.4167 17.2084L39.3333 17.2084L39.3333 22.1251L34.4167 22.1251L34.4167 17.2084ZM34.4167 17.2084L29.5 17.2084L29.5 12.2917L34.4167 12.2917L34.4167 17.2084ZM34.4167 41.7918L39.3333 41.7918L39.3333 36.8751L34.4167 36.8751L34.4167 41.7918ZM34.4167 41.7918L29.5 41.7918L29.5 46.7084L34.4167 46.7084L34.4167 41.7918Z" 
									fill={ projectColor }
								/>
							</svg>
						</div>
					</div>
				</div>
			</NavLink>
		</div>
    );
};
		