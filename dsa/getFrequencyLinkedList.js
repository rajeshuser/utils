class LinkedListNode {
	constructor(data, frequency) {
		this.data = data;
		this.frequency = frequency;
		this.next = null;
	}
}

function getFrequencyLinkedList(numbers) {
	let frequency = {};
	numbers.forEach((number) => (frequency[number] = frequency[number] + 1 || 1));
	numbers = Object.keys(frequency).map(Number);
	numbers.sort((a, b) => a - b);
	let head = null;
	let node = head;
	for (let i in numbers) {
		if (head === null) {
			head = new LinkedListNode(null, null);
			node = head;
		} else {
			node.next = new LinkedListNode(null, null);
			node = node.next;
		}
		node.data = numbers[i];
		node.frequency = frequency[numbers[i]];
	}
	return head;
}

function print(frequencyLinkedList) {
	let output = "";
	let node = frequencyLinkedList;
	while (node) {
		output += `${node.data},${node.frequency} --> `;
		node = node.next;
	}
	output += null;
	console.log(output);
}

const numbers = [1, 2, 3, 1, 3, 4];
const frequencyLinkedList = getFrequencyLinkedList(numbers);
print(frequencyLinkedList);
