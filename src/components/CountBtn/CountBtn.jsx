import React, { useState } from "react";

const CountBtn = (props) => {
	// console.log(props);

	const [currentCount, setCurrentCount] = useState(0);

	const handleClick = () => {
		setCurrentCount(currentCount + props.incrementBy);
	};

	const divStyle = {
		color: "red",
		border: "1px solid blue",
		borderRadius: "12px",
		padding: "10px",
	};

	const btnStyles = {
		background: props.btnColor,
		borderRadius: props.borderRadius,
		padding: "10px",
		margin: "5px",
	};

	return (
		<div style={divStyle}>
			<button style={btnStyles} onClick={handleClick}>
				+{props.incrementBy}
			</button>
			<div>{currentCount}</div>
		</div>
	);
};

export default CountBtn;
