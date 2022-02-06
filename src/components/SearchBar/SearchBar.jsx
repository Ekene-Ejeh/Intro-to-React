import React, { useState } from "react";
import "./SearchBar.css";

// storing the input in a state
const SearchBar = (props) => {
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

	const filteredProducts = props.products.filter((product) => {
		return product.includes(searchValue);
	});

	return (
		<div className="">
			<input type="text" value={searchValue} onChange={handleInputChange} />
			<h3>{searchValue}</h3>
			{shouldDisplayClearBtn && (
				<button onClick={handleClearBtn}>Clear Input</button>
			)}

			<ol>
				{filteredProducts.map((product) => {
					return <li key={product}>{product}</li>;
				})}
			</ol>
		</div>
	);
};

export default SearchBar;
