import React from "react";
import Mouse from "./Mouse";

const cardStyle = {
	height: "100px",
	border: "1px solid gray",
	margin: "5px",
};

export default (props) => {
	return (
		<Mouse>
			{({ x, y }) => (
				<div style={cardStyle}>
					{x}:{y}
				</div>
			)}
		</Mouse>
	);
	// return (
	// 	<Mouse
	// 		children={({ x, y }) => (
	// 			<div style={cardStyle}>
	// 				{x}:{y}
	// 			</div>
	// 		)}
	// 	/>
	// );
};
