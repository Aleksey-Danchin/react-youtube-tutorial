import React from "react";
import { useState } from "react";

function App(props) {
	const [counter, setCounter] = useState(0);

	return (
		<button onClick={() => setCounter(counter + 1)}>
			На меня нажали {counter} раз.
		</button>
	);
}

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			counter: 0,
// 		};

// 		this.handlerClick = this.handlerClick.bind(this);
// 	}

// 	handlerClick() {
// 		this.setState({ counter: this.state.counter + 1 });
// 	}

// 	render() {
// 		return (
// 			<button
// 				onClick={() => this.setState({ counter: this.state.counter + 1 })}
// 			>
// 				На меня нажали {this.state.counter} раз.
// 			</button>
// 		);
// 	}
// }

export default App;
