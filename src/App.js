import { useCallback, useEffect, useRef } from "react";

const ENTER = "Enter";

function App() {
	const refName = useRef();
	const refSurname = useRef();
	const refSend = useRef();

	const userLog = useCallback(() => {
		const user = {
			name: refName.current.value,
			surname: refSurname.current.value,
		};

		console.log(user);
	}, [refName, refSurname]);

	const keyUpHandler = useCallback(
		(event) => {
			const { key } = event;

			if (key !== ENTER) {
				return;
			}

			if (refName.current && !refName.current.value) {
				return refName.current.focus();
			}

			if (refSurname.current && !refSurname.current.value) {
				return refSurname.current.focus();
			}

			userLog();
		},
		[userLog, refName, refSurname]
	);

	useEffect(() => {
		if (refName.current && refSurname.current && refSend.current) {
			refName.current.addEventListener("keyup", keyUpHandler);
			refSurname.current.addEventListener("keyup", keyUpHandler);
			refSend.current.addEventListener("click", userLog);

			return () => {
				refName.current.removeEventListener("keyup", keyUpHandler);
				refSurname.current.removeEventListener("keyup", keyUpHandler);
				refSend.current.removeEventListener("click", userLog);
			};
		}
	}, [refName, refSend, refSurname, keyUpHandler, userLog]);

	return (
		<div>
			<input placeholder="name" ref={refName} />
			<br />
			<input placeholder="surname" ref={refSurname} />
			<br />
			<button ref={refSend}>Send</button>
		</div>
	);
}

// function App() {
// 	const [user, setUser] = useState({
// 		name: "",
// 		surname: "",
// 	});

// 	const refName = useRef();
// 	const refSurname = useRef();

// 	const userLog = useCallback(() => {
// 		console.log(user);
// 	}, [user]);

// 	const keyUpHandler = useCallback(
// 		(event) => {
// 			const { key } = event;

// 			if (key !== ENTER) {
// 				return;
// 			}

// 			if (refName.current && !refName.current.value) {
// 				return refName.current.focus();
// 			}

// 			if (refSurname.current && !refSurname.current.value) {
// 				return refSurname.current.focus();
// 			}

// 			userLog();
// 		},
// 		[userLog, refName, refSurname]
// 	);

// 	return (
// 		<div>
// 			<input
// 				placeholder="name"
// 				ref={refName}
// 				value={user.name}
// 				onChange={(e) => setUser((user) => ({ ...user, name: e.target.value }))}
// 				onKeyUp={keyUpHandler}
// 			/>
// 			<br />
// 			<input
// 				placeholder="surname"
// 				ref={refSurname}
// 				value={user.surname}
// 				onChange={(e) =>
// 					setUser((user) => ({ ...user, surname: e.target.value }))
// 				}
// 				onKeyUp={keyUpHandler}
// 			/>
// 			<br />
// 			<button onClick={userLog}>Send</button>
// 		</div>
// 	);
// }

export default App;
