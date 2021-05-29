import UserCard from "./UserCard";

const users = [
	{ id: 1, name: "Алексей", surname: "Данчин" },
	{ id: 2, name: "Сергей", surname: "Воронов" },
	{ id: 3, name: "Олег", surname: "Дарков" },
];

function App(prop) {
	return (
		<div>
			<UserCard
				user={users[0]}
				onSendMessage={() => console.log(users[0])}
			/>
			<UserCard
				user={users[1]}
				onSendInvite={() => console.log(users[1])}
			/>
			<UserCard user={users[2]} />
		</div>
	);
}

export default App;
