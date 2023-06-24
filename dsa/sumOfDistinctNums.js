function sumOfDistictNums(nums) {
	const numsSet = new Set(nums);
	let sum = 0;
	for (let num of numsSet) {
		sum += num;
	}
	return sum;
}

console.log(sumOfDistictNums([1, 2, 3]));
console.log(sumOfDistictNums([1, 2, 2]));
console.log(sumOfDistictNums([1, 2, 3, 3]));
