class Input {
	constructor(input) {
		this.input = input.split("\n");
		this.line = -1;
	}

	next() {
		return this.input[++this.line]?.split(" ")?.map(Number) ?? [];
	}
}

let input = new Input(`3
3 4 5 6 7
3 4 9 6 4
2 5 7 7 8`);

console.log(input.next());
console.log(input.next());
console.log(input.next());
console.log(input.next());
console.log(input.next());
console.log(input.next());
