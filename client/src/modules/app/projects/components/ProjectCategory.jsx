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
                                key={ project.student }
                                project_name={ project.project_name }
                                student={ project.student }
                                banner_image={ project.banner_image }
                                project_category={ project.category }
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
    
}