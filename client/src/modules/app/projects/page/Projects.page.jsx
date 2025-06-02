import React, { useState } from "react";
import Search from "../components/Search";
import Buttons from "../components/Buttons";
export const Projects = () => {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<>
			<section>
				<div className="inner-wrapper">
					<h1 className="">Eindjaarprojecten</h1>
					<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
					<Buttons />
				</div>
			</section>
		</>
	);
};
