import { useState } from "react";
import Search from "../components/Search";
import Buttons from "../components/Buttons";

//Components
import { ProjectCard } from "../../../shared/ProjectCard/ProjectCard";

//Hooks
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";

//CSS
import "./projects.module.css";

export const Projects = () => {

	const { data, isLoading } = useProjectsData();

	const [searchTerm, setSearchTerm] = useState("");


	return (
		<>
			<section>
				<div className="inner-wrapper">
					<h1 className="">Eindjaarprojecten</h1>
					<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					<Buttons />

					<div className="projects-wrapper">
						{
							isLoading ? ("loading...") : (
								data.map((project) => (
									<ProjectCard
										project_name={ project.project_name }
										student={ project.student }
										// banner_image={ project.banner_image  || "/figure_orange.png" }
									/>
								))
							)
						}
					</div>
				</div>
			</section>
		</>
	);
};
