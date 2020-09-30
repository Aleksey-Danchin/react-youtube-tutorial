import React, { useReducer } from "react";

import { increment, decrement } from "./actions";
import reducer from "./reducer";

function App() {
	const [state, dispatch] = useReducer(reducer, {
		counter: 1,
	});

	return (
		<div>
			<button onClick={() => dispatch(decrement(2))}>-2</button>
			<button onClick={() => dispatch(decrement(1))}>-1</button>

			<span>{state.counter}</span>

			<button onClick={() => dispatch(increment(1))}>+1</button>
			<button onClick={() => dispatch(increment(2))}>+2</button>
		</div>
	);
}

export default App;
