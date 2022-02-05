import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className="">
			<input type="text" value={searchValue} onChange={handleInputChange} />
			<h3>{searchValue}</h3>
			<h2>Search-Bar</h2>
		</div>
	);
};

export default SearchBar;
