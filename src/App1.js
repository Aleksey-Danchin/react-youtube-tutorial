import React from "react";
import { useState, useMemo } from "react";

function createUser(name, surname) {
	const user = { name, surname };

	console.log(user);

	return user;
}

function App() {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [counter, setCounter] = useState(0);

	const user = useMemo(() => createUser(name, surname), [name, surname]);

	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>
				На меня нажали {counter} раз.
			</button>
			<br />
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<input
				type="text"
				value={surname}
				onChange={(e) => setSurname(e.target.value)}
			/>
			<br />
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</div>
	);
}

export default App;
