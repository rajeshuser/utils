function getKBeautyOfNumber(number, k) {
	let count = 0;
	let digits = number.toString().split("");
	for (let i = 0; i <= digits.length - k; i++) {
		let subNum = +digits.slice(i, i + k).join("");
		count += number % subNum === 0;
	}
	return count;
}

console.log(getKBeautyOfNumber(240, 2));
