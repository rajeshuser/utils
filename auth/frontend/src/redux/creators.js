import axios from "axios";
import { SIGNIN, SIGNOUT } from "./types";

const baseURL = "http://localhost:5000";

export function signin(user) {
	return {
		type: SIGNIN,
		payload: user
	};
}

export function signout() {
	return {
		type: SIGNOUT
	};
}

export function requestSignup(user, navigate) {
	return async function (dispatch) {
		try {
			const response = await axios({
				method: "POST",
				baseURL,
				url: "/users/signup",
				data: user
			});
			const { message, error } = response.data;
			if (message) {
				alert(message);
				dispatch(signin(user));
				navigate("/");
			} else {
				alert(error);
			}
		} catch (error) {
			alert(error.message);
		}
	};
}

export function requestSignin(user, navigate) {
	return async function (dispatch) {
		try {
			const response = await axios({
				method: "POST",
				baseURL,
				url: "/users/signin",
				data: user
			});
			const { token, error } = response.data;
			if (token) {
				alert(token);
				dispatch(signin(user));
				navigate("/");
			} else {
				alert(error);
			}
		} catch (error) {
			alert(error.message);
		}
	};
}
