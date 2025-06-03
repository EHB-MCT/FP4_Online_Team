import { useEffect, useState } from "react";
import Search from "../components/Search";

//Components
import { FilterButton } from "../components/FilterButton";
import { ProjectCategory } from "../components/ProjectCategory";

//Hooks
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";

//CSS
import "./projects.module.css";

export const Projects = () => {

	const { data = [], isLoading } = useProjectsData();

	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState(null);

	const categories = [
		"Web & Mobile",
		"XR, 3D, Game",
		"Experience Design",
		"Interactive Motion",
		"Prototyping",
	];

	const filteredData = data.filter((project) => {
		if (selectedCategory === null) {
			return project;
		} else if (project.category === selectedCategory) {
			return project;
		}
	});

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
									onClick={() => setSelectedCategory(category)}
								/>
							))
						}
						<FilterButton 
                            key="all"
                            category="All"
                            onClick={() => setSelectedCategory(null)}
                        />
					</div>
                    <div className="projects-outer-wrapper">
                        {isLoading ? (
                            "loading..."
                        ) : (
                            categories
								.filter(category => selectedCategory === null || selectedCategory === category)
                                .map((category) => (
                                    <ProjectCategory
                                        key={ category }
                                        title={ category }
                                        data={filteredData.filter((project) => project.category === category)}
                                    />
								))
                        )}
                    </div>
                </div>
            </section>
		</>
	);
};
