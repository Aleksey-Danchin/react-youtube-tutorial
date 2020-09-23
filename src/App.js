import React from "react";
import { useState } from "react";

function App(props) {
	const [value, setValue] = useState("Яблоко");

	const handlerChange = (e) => {
		setValue(e.target.value);

		console.log(e.target.value);
	};

	return (
		<select value={value} onChange={handlerChange}>
			<option value="Яблоко">Яблоко</option>
			<option value="Банан">Банан</option>
			<option value="Кокос">Кокос</option>
			<option value="Виноград">Виноград</option>
		</select>
	);
}

// function App(props) {
// 	const [checked, setChecked] = useState(null);

// 	const items = ["Яблоко", "Банан", "Кокос", "Виноград"];

// 	return (
// 		<ul>
// 			{items.map((item) => (
// 				<li key={item}>
// 					<label>
// 						<input
// 							type="radio"
// 							checked={checked === item}
// 							onChange={() => setChecked(item)}
// 						/>
// 						{item}
// 					</label>
// 				</li>
// 			))}
// 		</ul>
// 	);
// }

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			value: "Текст",
// 		};
// 	}

// 	handlerChange(event) {
// 		this.setState({
// 			value: event.target.value,
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				{this.state.value}
// 				<br />
// 				<input
// 					value={this.state.value}
// 					onChange={(e) => this.handlerChange(e)}
// 				/>
// 			</div>
// 		);
// 	}
// }

export default App;
