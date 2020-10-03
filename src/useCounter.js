import { useState } from "react";

export default function useCounter(n = 0) {
	const [counter, setCounter] = useState(n);

	return {
		counter,
		count: () => setCounter(counter + 1),
	};
}
