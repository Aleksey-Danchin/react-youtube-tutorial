import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.intervalFlag = null;

		this.state = {
			title: "Текущее время",
			date: new Date(),
			counter: 0,
		};
	}

	componentDidMount() {
		this.intervalFlag = setInterval(() => {
			this.setState((state, props) => ({
				date: new Date(),
				counter: state.counter + 1,
			}));
		}, 1000);
	}

	componentDidUpdate() {}

	componentWillUnmount() {
		clearInterval(this.intervalFlag);
	}

	render() {
		return (
			<div>
				<p>{this.state.title}</p>
				<p>{this.state.counter}</p>
				<p>{this.state.date.toLocaleTimeString()}</p>
			</div>
		);
	}
}

export default App;
