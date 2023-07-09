function getMaxMoneyRobbable(money, index = 0, dp = []) {
	if (index >= money.length) return 0;
	if (dp[index]) return dp[index];
	let answer1 = money[index] + getMaxMoneyRobbable(money, index + 2, dp);
	let answer2 = getMaxMoneyRobbable(money, index + 1, dp);
	return (dp[index] = Math.max(answer1, answer2));
}

let money = [1, 2, 3, 1];
console.log(getMaxMoneyRobbable(money));
