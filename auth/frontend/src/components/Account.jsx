import React from "react";
import { useDispatch } from "react-redux";
import { signout } from "../redux/creators";

export default function Account() {
	const dispatch = useDispatch();

	const handleSignout = (event) => {
		dispatch(signout());
	};

	return (
		<div>
			<h1>Account</h1>
			<button onClick={handleSignout}>Signout</button>
		</div>
	);
}
