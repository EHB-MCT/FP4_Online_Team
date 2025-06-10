import { useState } from "react";
import { ProjectCard } from "../../../shared/ProjectCard/ProjectCard";
import { useProjectsData } from "../../../shared/const/hooks/getProjectsData.hook";

export const Voting = () => {
	document.title = "Voting | Expo 2025";

	const { data = [], isLoading } = useProjectsData();

	// Flatten all projects into one array
	const allProjects = Array.isArray(data) ? data : Object.values(data).flat();

	// Helper to chunk array into rows of 3
	const chunk = (arr, size) => (arr.length ? [arr.slice(0, size), ...chunk(arr.slice(size), size)] : []);

	const rows = chunk(allProjects, 3);

	// Pagination state for rows
	const [visibleRowStart, setVisibleRowStart] = useState(0);
	const rowsPerPage = 5;
	const maxRowStart = Math.max(0, rows.length - rowsPerPage);

	const handlePrev = () => setVisibleRowStart((s) => Math.max(0, s - rowsPerPage));
	const handleNext = () => setVisibleRowStart((s) => Math.min(maxRowStart, s + rowsPerPage));

	return (
		<div className="inner-wrapper">
			<div className="voting">
				<h1 style={{ textAlign: "center", color: "black" }}>Stem op jouw favoriete project</h1>

				{rows.slice(visibleRowStart, visibleRowStart + rowsPerPage).map((row, rowIdx) => (
					<div
						key={visibleRowStart + rowIdx}
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "24px",
							marginBottom: "32px",
						}}
					>
						{row.map((p, i) => (
							<ProjectCard key={i + (visibleRowStart + rowIdx) * 3} projectName={p.project_name} name={p.student} />
						))}
					</div>
				))}

				<div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTopBottom: "24px" }}>
					<button onClick={handlePrev} disabled={visibleRowStart === 0}>
						Previous
					</button>
					<div style={{ textAlign: "center", color: "#333" }}>
						Page {Math.floor(visibleRowStart / rowsPerPage) + 1} of {Math.ceil(rows.length / rowsPerPage)}
					</div>
					<button onClick={handleNext} disabled={visibleRowStart >= maxRowStart}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};
