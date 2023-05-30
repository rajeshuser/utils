import React from "react";
import { HiCheck } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import styles from "./StrongPasswordIndicator.module.css";

export default function StrongPasswordIndicator({ validations }) {
	return (
		<ul className={`${styles.strongPasswordIndicator}`}>
			{validations.map((validation) => (
				<li
					key={validation.name}
					className={`${validation.isSatisfied ? styles.satisfied : styles.notSatisfied}`}
				>
					{validation.isSatisfied ? <HiCheck /> : <RxCross2 />}
					{validation.name}
				</li>
			))}
		</ul>
	);
}

function applyValidation(password) {
	return [
		{
			name: "Atleast 8 characters",
			isSatisfied: (function () {
				return password.length >= 8;
			})()
		},
		{
			name: "Atleast 1 decimal digit",
			isSatisfied: (function () {
				for (let char of password) {
					if ("0123456789".includes(char)) return true;
				}
				return false;
			})()
		},
		{
			name: "Atleast 1 special character",
			isSatisfied: (function () {
				for (let char of password) {
					if ("!@#$%^&*".includes(char)) return true;
				}
				return false;
			})()
		},
		{
			name: "Atleast 1 small case letter",
			isSatisfied: (function () {
				for (let char of password) {
					if ("abcdefghijklmnopqrstuvwxyz".includes(char)) return true;
				}
				return false;
			})()
		},
		{
			name: "Atleast 1 large case letter",
			isSatisfied: (function () {
				for (let char of password) {
					if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char)) return true;
				}
				return false;
			})()
		}
	];
}
