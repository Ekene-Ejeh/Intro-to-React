import React from "react";
import CountBtn from "./CountBtn";

const App = () => {
	return (
		<div>
			<CountBtn incrementBy={1} />
			<CountBtn incrementBy={5} />
			<CountBtn incrementBy={8} />
		</div>
	);
};

export default App;
