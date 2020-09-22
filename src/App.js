import React from "react";
import Button from "./Button";

function App(props) {
	const handlerThirdClick = () => {
		console.log("3-й клик прошел");
	};

	const handlerClick = () => {
		console.log("handlerClick fired");
	};

	const handlerMouseEnter = () => {
		console.log("handlerMouseEnter fired");
	};

	return (
		<Button
			onThirdClick={handlerThirdClick}
			onClick={handlerClick}
			onMouseEnter={handlerMouseEnter}
		>
			Новый текст для кнопки
		</Button>
	);
}

export default App;
