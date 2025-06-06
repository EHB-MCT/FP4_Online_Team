import { useEffect, useState } from "react";

//Components
import { FilterButton } from "../components/FilterButton";
import { ProjectCategory } from "../components/ProjectCategory";
import Search from "../components/Search";

//Hooks
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";

//CSS
import "./projects.module.css";
import { useLocation } from "react-router";

export const Projects = () => {

	const { data = [], isLoading } = useProjectsData();
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [filteredProjects, setFilteredProjects] = useState(data);

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const searchQuery = searchParams.get("search")?.toLowerCase() || "";

	const categories = [
		"Web & Mobile",
		"XR, 3D, Game",
		"Experience Design",
		"Interactive Motion",
		"Prototyping",
	];

	useEffect(() => {
		if (!data) return;
	
		let filteredData = data;
	
		if (selectedCategory !== null) {
			filteredData = filteredData.filter(
				(project) => project.category === selectedCategory
			);
		}
	
		if (searchQuery) {
			filteredData = filteredData.filter(
				(project) =>
					project.student.toLowerCase().includes(searchQuery) ||
					project.project_name.toLowerCase().includes(searchQuery)
			);
		}
	
		setFilteredProjects(filteredData);
	}, [searchQuery, selectedCategory, data]);

	// Get categories that have projects after filtering
	const categoriesToShow = categories.filter(category => {
		const categoryProjects = filteredProjects.filter(project => project.category === category);
		return categoryProjects.length > 0;
	});

	return (
		<>
			<section>
                <div className="inner-wrapper">
                    <h2 className="">Eindjaarprojecten</h2>
                    <Search />
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
                            categoriesToShow.map((category) => (
                                <ProjectCategory
                                    key={ category }
                                    title={ category }
                                    data={filteredProjects.filter((project) => project.category === category)}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>
		</>
	);
};