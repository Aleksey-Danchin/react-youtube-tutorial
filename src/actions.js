import { INCREMENT, DECREMENT } from "./boilerplate";

// const increment = (paylod) => ({
// 	type: INCREMENT,
// 	paylod,
// });

// const decrement = (paylod) => ({
// 	type: DECREMENT,
// 	paylod,
// });

export const increment = (paylod) => {
	return {
		type: INCREMENT,
		paylod,
	};
};

export const decrement = (paylod) => {
	return {
		type: DECREMENT,
		paylod,
	};
};
