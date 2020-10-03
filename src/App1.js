import React, { useState, useRef } from "react";
import { useEffect } from "react";

function App() {
	const [counter, setCounter] = useState(0);

	const ref = useRef();
	useEffect(() => {
		ref.current = {
			counter: 0,
		};
	}, []);

	return (
		<div>
			<button onClick={() => ref.current.counter++}>
				На меня нажали {counter} раз.
			</button>
			<br />
			<button onClick={() => setCounter(ref.current.counter)}>Обновить</button>
		</div>
	);
}

export default App;
