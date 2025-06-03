//Components
import { ProjectCard } from "../../../shared/ProjectCard/ProjectCard";

export const ProjectCategory = ({ data, title }) => {

    return(
        <>
            <h2>{ title }</h2>
            <div className="projects-wrapper">
                {
                    data.map((project) => (
                        <ProjectCard
                            key={ project.student }
                            project_name={ project.project_name }
                            student={ project.student }
                            banner_image={ project.banner_image }
                        />
                    ))
                }
            </div>
           
        </>
    )
    
}