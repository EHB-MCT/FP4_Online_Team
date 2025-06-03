import { useState } from "react";
import Search from "../components/Search";

//Components
import { FilterButton } from "../components/FilterButton";
import { ProjectCategory } from "../components/ProjectCategory";

//Hooks
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";

//CSS
import "./projects.module.css";

export const Projects = () => {

	const { data, isLoading } = useProjectsData();

	const [searchTerm, setSearchTerm] = useState("");

	const categories = [
        "Web & Mobile",
        "XR, 3D, Game",
		"Experience Design",
		"Interactive Motion",
		"Prototyping",
    ];


	return (
		<>
			<section>
                <div className="inner-wrapper">
                    <h1 className="">Eindjaarprojecten</h1>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <div className="filter-button-wrapper">
						{
							categories.map((category) => (
								<FilterButton 
									key={ category }
									category={ category}
								/>
							))
						}
					</div>
                    <div className="projects-outer-wrapper">
                        {isLoading ? (
                            "loading..."
                        ) : (
                            categories.map((category) => (
                                <ProjectCategory
                                    key={ category }
                                    title={ category }
                                    data={data.filter((project) => project.category === category)}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>
		</>
	);
};
