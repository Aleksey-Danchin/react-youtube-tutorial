import React from "react";
import { useState } from "react";

export default function RecursiveButton(props) {
	const [showMode, setShowMode] = useState(false);

	return (
		<>
			<button onClick={() => setShowMode(!showMode)}>
				Покажи/Скрой следующий шаг
			</button>
			<br />
			{showMode ? <RecursiveButton /> : null}
		</>
	);
}
