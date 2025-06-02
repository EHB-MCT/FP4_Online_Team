import React from "react";
import { CiSearch } from "react-icons/ci";
import "./Search.css";
const Search = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="search">
			<div className="search-inner-wrapper">
				<input
					type="text"
					placeholder="Search through thousands of movies"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="searchbar"
				/>
				<CiSearch />
			</div>
		</div>
	);
};

export default Search;
