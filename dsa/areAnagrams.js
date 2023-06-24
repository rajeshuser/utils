function areAnagrams(string1, string2) {
	let freqs = {};
	for (let char of string1) {
		freqs[char] = freqs[char] === undefined ? 1 : freqs[char] + 1;
	}
	for (let char of string2) {
		freqs[char] = freqs[char] === undefined ? -1 : freqs[char] - 1;
	}
	for (let char in freqs) {
		if (freqs[char] !== 0) {
			return false;
		}
	}
	return true;
}

console.log(areAnagrams("cars", "race"));
console.log(areAnagrams("cars", "arcs"));
console.log(areAnagrams("smile", "miles"));
