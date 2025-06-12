import { useEffect, useState } from "react";
import { useLocation } from "react-router";

//Components
import { FilterButton } from "../components/FilterButton";
import { ProjectCategory } from "../components/ProjectCategory";
import Search from "../components/Search";

//Hooks
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";

//CSS
import styles from "./projects.module.scss";
import clsx from "clsx";

export const Projects = () => {

	const { data = [], isLoading } = useProjectsData();
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [filteredProjects, setFilteredProjects] = useState(data);

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const searchQuery = searchParams.get("search")?.toLowerCase() || "";

	const categories = [
		"Web & Mobile",
		"Digital Design",
		"Experience Design",
		"XR & 3D"
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
			<section className={clsx(styles["projects-wrapper"])}>
				<div className={clsx(styles["projects-wrapper--horizontal-scroll-wrapper"])} >
					<div className={clsx(styles["projects-wrapper--horizontal-scroll-wrapper--header"], "inner-wrapper")}>
						<h2>Eindprojecten</h2>
						<Search />
						<div className={clsx(styles["projects-wrapper--horizontal-scroll-wrapper--header--filter-button-wrapper"])}>
							{
								categories.map((category) => (
									<FilterButton
										key={ category }
										project_category={ category }
										onClick={() => setSelectedCategory( category )}
									/>
								))
							}
						</div>
					</div>

					<div className={clsx(styles["projects-wrapper--horizontal-scoll-wrapper--projects-outer-wrapper"])}>
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


// <div className="inner-wrapper">
                //     <h2 className="">Eindjaarprojecten</h2>
                //     <Search />
                //     <div className="filter-button-wrapper">
				// 		{
				// 			categories.map((category) => (
				// 				<FilterButton 
				// 					key={ category }
				// 					category={ category}
				// 					onClick={() => setSelectedCategory(category)}
				// 				/>
				// 			))
				// 		}
				// 		<FilterButton 
                //             key="all"
                //             category="All"
                //             onClick={() => setSelectedCategory(null)}
                //         />
				// 	</div>
                    
                // </div>