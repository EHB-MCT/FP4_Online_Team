import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";

//CSS
import "./Search.css";

const Search = () => {

	const nav = useNavigate();

	const handleSearch = (event) => {
		const searhValue = event.target.value;
		nav(`?search=${encodeURIComponent(searhValue)}`)
	}

	return (
		<div className="outer-search">
			<div className="search">
				<div className="search-inner-wrapper">
					<input
						type="text"
						placeholder="Zoek Projecten, Studenten "
						onChange={ handleSearch }
						className="searchbar"
					/>
					<CiSearch size={32} style={{ strokeWidth: 1 }} />
				</div>
			</div>
		</div>
	);
};

export default Search;
