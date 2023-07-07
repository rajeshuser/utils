function getSecondSmallerNumber(numbers) {
	let firstSmaller = numbers[0];
	let secondSmaller = numbers[0];

	for (let number of numbers) {
		if (number < firstSmaller) {
			secondSmaller = firstSmaller;
			firstSmaller = number;
		} else if (number < secondSmaller) {
			secondSmaller = number;
		}
	}

	return secondSmaller;
}

const numbers = [23, 56, 78, 32, 11, 9, 59, 93, 67, 87, 12];
console.log(getSecondSmallerNumber(numbers));
numbers.sort((a, b) => a - b);
console.log(numbers);
