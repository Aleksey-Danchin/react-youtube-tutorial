import React, { useState, useRef } from "react";
import { useCallback } from "react";

const Mouse = (props) => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const ref = useRef();

	const mouseMoveHandler = useCallback(
		(e) => {
			const rect = ref.current.getBoundingClientRect();

			setX(e.clientX - rect.left);
			setY(e.clientY - rect.top);
		},
		[setX, setY, ref]
	);

	return (
		<div ref={ref} onMouseMove={mouseMoveHandler}>
			{props.children({ x, y })}
		</div>
	);
};

export default Mouse;
