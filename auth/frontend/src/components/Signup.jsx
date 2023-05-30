import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Signup.module.css";
import StrongPasswordIndicator from "./StrongPasswordIndicator";
import applyValidation from "../utils/applyValidation";
import { requestSignup } from "../redux/creators";
import Divider from "./Divider";

export default function Signup() {
	const [user, setUser] = useState({ email: "", password: "" });
	const [confirmPassword, setConfirmPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { validations, isStrongPassword } = applyValidation(user.password);

	const handleSignup = (event) => {
		event.preventDefault();
		if (!isStrongPassword) {
			return alert("Please provide a strong password");
		}
		if (user.password !== confirmPassword) {
			return alert("Passwords aren't matching");
		}
		dispatch(requestSignup(user, navigate));
	};

	const handleUserChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};

	const handleConfirmPassword = (event) => {
		setConfirmPassword(event.target.value);
	};

	return (
		<div className={`${styles.formWrapper}`}>
			<h1>Signup</h1>
			<h3>Signup with Google</h3>
			<Divider text="or" />
			<form className={`${styles.form}`} onSubmit={handleSignup}>
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
					minLength="8"
				/>
				<label htmlFor="confirmPassword">Confirm password</label>
				<input
					type="password"
					id="confirmPassword"
					required
					value={confirmPassword}
					onChange={handleConfirmPassword}
					minLength="8"
				/>
				{user.password ? <StrongPasswordIndicator validations={validations} /> : null}
				<input type="submit" value="Signup" />
			</form>
			<p>
				Already have an account? <Link to="/signin">Signin</Link>
			</p>
		</div>
	);
}
