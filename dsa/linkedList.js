const LinkedListNode = require("./linkedListNode");

class LinkedList {
	constructor(list = [null]) {
		list = [...list];
		for (let i = list.length - 1; i >= 0; i--) {
			list[i] = new LinkedListNode(list[i]);
			if (i < list.length - 1) {
				list[i].next = list[i + 1];
			}
		}
		this.head = list[0];
		this.print();
	}

	reverse() {
		let previous = null;
		let current = this.head;
		while (current) {
			let next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}
		this.head = previous;
		this.print();
	}

	print() {
		let string = "";
		let node = this.head;
		while (node !== null) {
			string += node.data + " -> ";
			node = node.next;
		}
		string += null;
		console.log(string);
	}
}

const linkedList = new LinkedList([1, 2, 3, 4, 5]);
linkedList.reverse();
