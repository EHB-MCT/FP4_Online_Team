import React, { useState } from "react";
import Search from "../components/Search";

export const Projects = () => {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<>
			<section>
				<div className="inner-wrapper">
					<h2 className="">Eindjaarprojecten</h2>
					<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				</div>
			</section>
		</>
	);
};
