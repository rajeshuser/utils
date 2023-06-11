import React from "react";
import { useDispatch } from "react-redux";
import { signout } from "../redux/creators";

export default function Account() {
	const dispatch = useDispatch();

	const handleSignout = (event) => {
		dispatch(signout());
	};

	function signOut() {
		// const auth2 = gapi.auth2.getAuthInstance();
		// auth2.signOut().then(function () {
		// 	console.log("User signed out.");
		// });
	}

	return (
		<div>
			<h1>Account</h1>
			<button onClick={handleSignout}>Signout</button>
			<button onClick="signOut()">Google Sign out</button>
		</div>
	);
}
