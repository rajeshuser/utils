class Queue {
	#array;

	constructor() {
		this.#array = [];
	}

	enqueue(item) {
		this.#array.push(item);
		this.print("queue after enqueue");
	}

	dequeue() {
		const front = this.#array.shift();
		this.print("queue after dequeue");
		return front;
	}

	front() {
		this.print("queue when asked front");
		if (this.#array.length) {
			return this.#array[0];
		} else {
			return null;
		}
	}

	print(message = "queue") {
		console.log(message + ":", this.#array);
	}

	isEmpty() {
		this.print("queue when asked emptiness");
		return this.#array.length === 0;
	}

	size() {
		this.print("queue whe nasked size");
		return this.#array.length;
	}
}

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.isEmpty();
queue.print();
queue.front();
queue.dequeue();
queue.dequeue();
queue.front();