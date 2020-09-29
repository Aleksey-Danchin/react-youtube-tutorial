import React, { useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);

	const handlerClick = () => {
		setCounter((x) => x + 1);
		setCounter((x) => x + 1);
	};

	return <button onClick={handlerClick}>На меня нажали {counter} раз.</button>;
}

// function App() {
// 	const [state, setState] = useState({
// 		counter: 0,
// 		user: {
// 			name: "Алексей",
// 			surname: "Данчин",
// 		},
// 	});

// 	console.log(state);

// 	const handlerClick = (e) => {
// 		setState({
// 			...state,
// 			counter: state.counter + 1,
// 		});
// 	};

// 	return (
// 		<button onClick={handlerClick}>На меня нажали {state.counter} раз.</button>
// 	);
// }

// function App() {
// 	const [counters, setCounters] = useState([0, 0, 0]);

// 	const count = (n) => setCounters(counters.map((x, i) => x + (i === n)));

// 	// const count = (n) => {
// 	// 	setCounters(
// 	// 		counters.map((v, i) => {
// 	// 			if (n === i) {
// 	// 				return v + 1;
// 	// 			}

// 	// 			return v;
// 	// 		})
// 	// 	);
// 	// };

// 	return (
// 		<ul>
// 			{[0, 1, 2].map((v) => (
// 				<li key={v}>
// 					<button onClick={() => count(v)}>
// 						На меня нажали {counters[v]} раз.
// 					</button>
// 				</li>
// 			))}
// 		</ul>
// 	);
// }

export default App;
