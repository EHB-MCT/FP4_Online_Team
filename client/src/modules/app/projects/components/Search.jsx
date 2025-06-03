import React from "react";
import { CiSearch } from "react-icons/ci";
import "./Search.css";
const Search = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="outer-search">
			<div className="search">
				<div className="search-inner-wrapper">
					<input
						type="text"
						placeholder="Zoek Projecten, Studenten, ..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="searchbar"
					/>
					<CiSearch size={32} style={{ strokeWidth: 1 }} />
				</div>
			</div>
		</div>
	);
};

export default Search;
