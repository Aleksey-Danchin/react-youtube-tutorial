import React, { useEffect } from "react";
import { useState } from "react";

function App() {
	// componentDidMount componentDidUpdate
	useEffect(() => {
		console.log(document.querySelector("#target"));
	});

	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("/users?search=" + search)
			.then((response) => response.json())
			.then((users) => setUsers(users));
	}, [search]);

	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const flagInterval = setInterval(() => {
			console.log("fired");
			setTimer(timer + 1);
		}, 1000);

		return () => clearInterval(flagInterval);
	});

	return <p id="target">{timer}</p>;
}

export default App;
