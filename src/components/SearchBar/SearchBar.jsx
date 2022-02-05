import React, { useState } from "react";
import "./SearchBar.css";

const products = [
	"Tooth paste",
	"Tooth brush",
	"Mouth wash",
	"Dental floss",
	"Mouth Guard",
];

// storing the input in a state
const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");

	// displaying the input when changed
	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	// clearing the input
	const handleClearBtn = () => {
		setSearchValue("");
	};
	// conditional rendering on the clear btn
	const shouldDisplayClearBtn = searchValue.length > 0;

	return (
		<div className="">
			<input type="text" value={searchValue} onChange={handleInputChange} />
			<h3>{searchValue}</h3>
			{shouldDisplayClearBtn && (
				<button onClick={handleClearBtn}>Clear Input</button>
			)}

			{products.map((product) => {
				return <li>{product}</li>;
			})}
		</div>
	);
};

export default SearchBar;
