class Stack {
	constructor() {
		this.array = [];
		this.print("stack at intitial");
	}

	push(data) {
		this.array.push(data);
		this.print("stack after push");
	}

	pop() {
		const rear = this.array.pop();
		this.print("stack after pop");
		return rear;
	}

	peek() {
		return this.array.length > 0 ? this.array[this.array.length - 1] : null;
	}

	isEmpty() {
		return this.array.length === 0;
	}

	print(label = "stack") {
		console.log(`${label}:`, this.array.toString() || null);
	}
}

const stack = new Stack();
console.log(stack.peek());

stack.push(5);
console.log(stack.peek());
stack.push(7);
console.log(stack.peek());
stack.push(11);
console.log(stack.peek());

console.log(stack.isEmpty());

stack.pop();
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
stack.pop();
console.log(stack.peek());

console.log(stack.isEmpty());
