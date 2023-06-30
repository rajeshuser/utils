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
		print(this.head);
		return this.head;
	}

	reverse() {
		
	}
}

function print(head) {
	let ll = "";
	let node = head;
	while (node !== null) {
		ll += node.data + " -> ";
		node = node.next;
	}
	ll += null;
	console.log(ll);
}

module.exports = { LinkedList, print };
