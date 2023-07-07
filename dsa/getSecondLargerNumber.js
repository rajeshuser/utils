function getSecondLargerNumber(numbers) {
	let firstLarger = numbers[0];
	let secondLarger = numbers[0];

	for (let number of numbers) {
		if (number > firstLarger) {
			secondLarger = firstLarger;
			firstLarger = number;
		} else if (number > secondLarger) {
			secondLarger = number;
		}
	}

	return secondLarger;
}

const numbers = [23, 56, 78, 32, 11, 9, 59, 93, 67, 87, 12];
console.log(getSecondLargerNumber(numbers));
numbers.sort((a, b) => a - b);
console.log(numbers);
