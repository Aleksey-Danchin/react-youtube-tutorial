import React from "react";

function App(props) {
	const users = [
		{ id: 1, name: "Алексей", surname: "Данчин" },
		{ id: 2, name: "Серьгей", surname: "Воронин" },
		{ id: 3, name: "Татьяна", surname: "Митрофанова" },
		{ id: 4, name: "Лариса", surname: "Баталина" },
		{ id: 5, name: "Олег", surname: "Тинькофф" },
	];

	const handlerMouseEnter = (user) => {
		console.log(`${user.name} ${user.surname}`);
	};

	let lis = users.map((user, index) => {
		const even = index % 2 === 0;

		let style = {};
		if (even) {
			style = {
				color: "white",
				background: "black",
			};
		}

		return (
			<li
				key={user.id}
				style={style}
				onMouseEnter={() => handlerMouseEnter(user)}
			>
				{user.name} {user.surname}
			</li>
		);
	});

	return <ul>{lis}</ul>;
}

export default App;
