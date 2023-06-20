function sumOfNuturalNumbers1(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

function sumOfNuturalNumbers2(n) {
	return 0.5 * n * (n + 1);
}

console.log(sumOfNuturalNumbers1(70));
console.log(sumOfNuturalNumbers2(70));
