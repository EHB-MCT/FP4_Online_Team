import { useState, useEffect } from "react";
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";
import { ProjectCard } from "../../../shared/ProjectCard/ProjectCard";
import "./voting.css";

export const Voting = () => {
	const { data = [], isLoading } = useProjectsData();
	const [randomizedProjects, setRandomizedProjects] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 15;

	// Randomize projects when data changes
	useEffect(() => {
		if (data.length > 0) {
			const shuffled = [...data].sort(() => Math.random() - 0.5);
			setRandomizedProjects(shuffled);
		}
	}, [data]);

	const totalPages = Math.ceil(randomizedProjects.length / projectsPerPage);
	const indexOfLastProject = currentPage * projectsPerPage;
	const indexOfFirstProject = indexOfLastProject - projectsPerPage;
	const currentProjects = randomizedProjects.slice(
		indexOfFirstProject,
		indexOfLastProject
	);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
		window.scrollTo(0, 0);
	};

	const Pagination = ({ currentPage, totalPages, onPageChange }) => (
		<div className="pagination">
			{currentPage > 1 && (
				<button
					onClick={() => onPageChange(currentPage - 1)}
					className="page-arrow"
				>
					‹
				</button>
			)}

			<div className="page-numbers">
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
					<button
						key={number}
						onClick={() => onPageChange(number)}
						className={`page-number ${currentPage === number ? "active" : ""}`}
					>
						{number}
					</button>
				))}
			</div>

			{currentPage < totalPages && (
				<button
					onClick={() => onPageChange(currentPage + 1)}
					className="page-arrow"
				>
					›
				</button>
			)}
		</div>
	);

	useEffect(() => {
		const handleKeyPress = (event) => {
			if (event.key === "ArrowLeft" && currentPage > 1) {
				handlePageChange(currentPage - 1);
			} else if (event.key === "ArrowRight" && currentPage < totalPages) {
				handlePageChange(currentPage + 1);
			}
		};

		window.addEventListener("keydown", handleKeyPress);

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, [currentPage, totalPages]); // Dependencies array

	return (
		<main className="voting-page">
			<section>
				<div className="inner-wrapper">
					<h1>Stem op jouw favoriete project</h1>

					{!isLoading && (
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
						/>
					)}

					<div className="projects-grid">
						{isLoading
							? "Loading..."
							: currentProjects.map((project) => (
									<ProjectCard
										key={project.id}
										project_name={project.project_name}
										student={project.student}
										banner_image={project.banner_image}
										id={project.id}
									/>
							  ))}
					</div>
					{!isLoading && (
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
						/>
					)}
				</div>
			</section>
		</main>
	);
};
