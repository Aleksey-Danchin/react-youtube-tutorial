import { INCREASE, DECREASE } from "./boilerplate";

export function increase(payload) {
	return {
		type: INCREASE,
		payload,
	};
}

export function decrease(payload) {
	return {
		type: DECREASE,
		payload,
	};
}
