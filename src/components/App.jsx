import React from "react";
import CountBtn from "./CountBtn/CountBtn";
import SearchBar from "./SearchBar/SearchBar";

// const products = [
// 	"Tooth Paste",
// 	"Tooth Brush",
// 	"Mouth Wash",
// 	"Dental Floss",
// 	"Mouth Guard",
// ];

const App = () => {
	return (
		<div>
			<CountBtn incrementBy={1} btnColor={"red"} borderRadius={"2px"} />
			<CountBtn incrementBy={5} btnColor={"green"} borderRadius={"10px"} />
			<CountBtn incrementBy={8} btnColor={"blue"} borderRadius={"15px"} />
			<SearchBar />
			<SearchBar
				products={[
					"Tooth Paste",
					"Tooth Brush",
					"Mouth Wash",
					"Dental Floss",
					"Mouth Guard",
				]}
			/>
		</div>
	);
};

export default App;
