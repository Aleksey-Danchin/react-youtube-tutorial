import React from "react";

import Mouse from "./Mouse";

import Card from "./Card";

function App() {
	return (
		<>
			<Card />
			<Card />
			<Card />
		</>
	);
}

// function App() {
// 	return (
// 		<>
// 			<Mouse
// 				render={(data) => {
// 					return (
// 						<p>
// 							{data.x}:{data.y}
// 						</p>
// 					);
// 				}}
// 			/>
// 		</>
// 	);
// }

export default App;
