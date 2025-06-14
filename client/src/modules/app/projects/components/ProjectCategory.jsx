import clsx from "clsx";

//Components
import { ProjectCard } from "../../../shared/ProjectCard/ProjectCard";

//CSS
import styles from "../page/projects.module.scss"

export const ProjectCategory = ({ data, title }) => {

    return(
        <>
            <h2>{ title }</h2>
            <div className={clsx(styles["projects-wrapper--project-outer-wrapper--project-category-wrapper"])}>
                <div className={clsx(styles["projects-wrapper--project-outer-wrapper--project-category-wrapper--projects-horizontal-wrapper"])}>
                    {
                        data.map((project) => (
                            <ProjectCard
                                id={ project.id }
                                key={ project.creator_name }
                                name={ project.name }
                                creator_name={ project.creator_name }
                                key_image_path={ project.key_image_path }
                                category={ project.category }
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
    
}