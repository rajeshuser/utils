import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { requestSignin } from "../redux/creators";
import Divider from "./Divider";

export default function Signin() {
	const [user, setUser] = useState({ email: "", password: "" });
	const [rememberMe, setRememberMe] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSignin = (event) => {
		event.preventDefault();
		dispatch(requestSignin(user, navigate));
	};

	const handleUserChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};

	const handleRememberMe = (event) => {
		setRememberMe(!rememberMe);
		if (event.target.checked) {
			localStorage.setItem("email", user.email);
		} else {
			localStorage.removeItem("email");
		}
	};

	useEffect(() => {
		const email = localStorage.getItem("email");
		if (email) {
			setUser({ ...user, email });
		}
	}, []);

	function onSignIn(googleUser) {
		const profile = googleUser.getBasicProfile();
		console.log("ID: " + profile.getId());
		console.log("Name: " + profile.getName());
		console.log("Image URL: " + profile.getImageUrl());
		console.log("Email: " + profile.getEmail());
	}

	return (
		<div className={styles.formWrapper}>
			<h1>Signin</h1>
			<h3>Signin with Google</h3>
			<div className="g-signin2" data-onsuccess="onSignIn"></div>
			<Divider text="or" />
			<h3>Signin with Email</h3>
			<form className={styles.form} onSubmit={handleSignin}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					required
					value={user.email}
					onChange={handleUserChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					required
					value={user.password}
					onChange={handleUserChange}
				/>
				<div className={styles.hintFeatures}>
					<label>
						<input type="checkbox" checked={rememberMe} onChange={handleRememberMe} />
						Remember Me
					</label>
					<Link to="/resetPassword">Forgot password?</Link>
				</div>
				<input type="submit" value="Signin" />
			</form>
			<p>
				Don't have an account? <Link to="/signup">Signup</Link>
			</p>
		</div>
	);
}
