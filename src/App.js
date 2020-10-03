import React, { useState } from "react";

import useOne from "./useOne";
import useCounter from "./useCounter";
import useSmartCounter from "./useSmartCounter";

function App() {
	const { counter, add1, add5, remove1, remove5 } = useSmartCounter();

	return (
		<div>
			<button onClick={add1}>+1</button>
			<br />
			<button onClick={add5}>+5</button>
			<br />
			<p>{counter}</p>
			<br />
			<button onClick={remove1}>-1</button>
			<br />
			<button onClick={remove5}>-5</button>
		</div>
	);
}

// function App() {
// 	useOne(() => {
// 		console.log("1 раз вызван.");
// 	});

// 	const { counter, count } = useCounter(100);

// 	return <button onClick={count}>На меня нажали {counter} раз.</button>;
// }

export default App;
