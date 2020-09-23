import React from "react";
import { useState } from "react";

import Content from "./Content";
import RecursiveButton from "./RecursiveButton";

function App(props) {
	const [showMode, setShowMode] = useState(true);

	const handlerClick = () => {
		setShowMode(!showMode);
	};

	let content = null;

	if (showMode) {
		content = <Content />;
	}

	return (
		<div>
			<RecursiveButton />
			{/* <button onClick={handlerClick}>Show toggle</button>
			{content} */}
		</div>
	);
}

export default App;
