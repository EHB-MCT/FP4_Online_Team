import React, { useState } from "react";
import Search from "../components/Search";
const Projects = () => {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<>
			<section>
				<div className="inner-wrapper">
					<h1>Eindjaarprojecten</h1>
					<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				</div>
			</section>
		</>
	);
};

export default Projects;
