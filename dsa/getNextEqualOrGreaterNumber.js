function getNextEqualOrGreaterNumber(numbers) {
	let nextEqualOrGreaterNumber = [];
	for (let i = 0; i < numbers.length; i++) {
		if (
			nextEqualOrGreaterNumber.length === 0 ||
			numbers[i] >= nextEqualOrGreaterNumber[nextEqualOrGreaterNumber.length - 1]
		) {
			nextEqualOrGreaterNumber.push(numbers[i]);
		}
	}
	return nextEqualOrGreaterNumber;
}

console.log(getNextEqualOrGreaterNumber([16, 17, 4, 3, 5, 2]));
console.log(getNextEqualOrGreaterNumber([1, 3, 43, 300, 32, 20]));
