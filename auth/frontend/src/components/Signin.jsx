import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { requestSignin } from "../redux/creators";
import Divider from "./Divider";

export default function Signin() {
	const [user, setUser] = useState({ email: "", password: "" });
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSignin = (event) => {
		event.preventDefault();
		dispatch(requestSignin(user, navigate));
	};

	const handleUserChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};

	return (
		<div className={`${styles.formWrapper}`}>
			<h1>Signin</h1>
			<h3>Signin with Google</h3>
			<Divider text="or" />
			<form className={`${styles.form}`} onSubmit={handleSignin}>
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
				<input type="submit" value="Signin" />
			</form>
			<p>
				Don't have an account? <Link to="/signup">Signup</Link>
			</p>
		</div>
	);
}
