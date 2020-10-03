import React, { useState, useRef } from "react";

export default function App(props) {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");

	const nameInputRef = useRef();
	const surnameInputRef = useRef();

	const handlerKeyUp1 = (e) => {
		if (e.key === "Enter") {
			surnameInputRef.current.focus();
		}
	};

	const handlerKeyUp2 = (e) => {
		if (e.key === "Enter") {
			nameInputRef.current.focus();
		}
	};

	return (
		<form>
			<input
				ref={nameInputRef}
				type="text"
				placeholder="Имя"
				value={name}
				onChange={(e) => setName(e.target.value)}
				onKeyUp={handlerKeyUp1}
			/>
			<br />
			<input
				ref={surnameInputRef}
				type="text"
				placeholder="Фамилия"
				value={surname}
				onChange={(e) => setSurname(e.target.value)}
				onKeyUp={handlerKeyUp2}
			/>
		</form>
	);
}
