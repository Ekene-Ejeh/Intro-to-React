import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleClearBtn = () => {
		setSearchValue("");
	};

	const shouldDisplayClearBtn = searchValue.length > 0;

	return (
		<div className="">
			<input type="text" value={searchValue} onChange={handleInputChange} />
			<h3>{searchValue}</h3>
			{shouldDisplayClearBtn && (
				<button onClick={handleClearBtn}>Clear Input</button>
			)}
		</div>
	);
};

export default SearchBar;
