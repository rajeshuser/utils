export default function applyValidation(password) {
	const validations = [
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

	const isStrongPassword = validations.reduce((isStrongPassword, validation) => {
		return isStrongPassword && validation.isSatisfied;
	}, true);

	return { validations, isStrongPassword };
}
