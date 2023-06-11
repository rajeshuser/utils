import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { requestSignin } from "../redux/creators";
import Divider from "./Divider";

export default function ResetPassword() {
	const [user, setUser] = useState({ email: "", password: "" });
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleResetPassword = (event) => {
		event.preventDefault();
	};

	const handleUserChange = (event) => {
		setUser({ ...user, email: user.email });
	};

	return (
		<div className={styles.formWrapper}>
			<h1>Reset password</h1>
			<form className={styles.form} onSubmit={handleResetPassword}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					required
					value={user.email}
					onChange={handleUserChange}
				/>
				<input type="submit" value="Reset" />
			</form>
			<p>
				Go back to <Link to="/signin">Signin</Link>
			</p>
		</div>
	);
}
