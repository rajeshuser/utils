import { SIGNIN, SIGNOUT } from "./types";

const initialState = {
	user: "null"
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SIGNIN:
			return {
				...state,
				user: payload
			};
		case SIGNOUT:
			return {
				...state,
				user: null
			};
		default:
			return state;
	}
}
