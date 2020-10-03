import { INCREASE, DECREASE } from "./boilerplate";

export default function reducer(state, action) {
	switch (action.type) {
		case INCREASE:
			return {
				...state,
				counter: state.counter + action.payload,
			};

		case DECREASE:
			return {
				...state,
				counter: state.counter - action.payload,
			};

		default:
			return {
				...state,
			};
	}
}
