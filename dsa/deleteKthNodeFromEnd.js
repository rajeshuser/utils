class LinkedListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

function makeLinkedList(list) {
	let head = null;
	let node = head;
	for (let data of list) {
		if (head === null) {
			head = new LinkedListNode(data);
			node = head;
		} else {
			node.next = new LinkedListNode(data);
			node = node.next;
		}
	}
	return head;
}

function deleteKthNodeFromEnd(head, k) {
	if (head === null) return head;
	let node1 = head;
	let node2 = head;
	for (let i = 0; i < k; i++) {
		node2 = node2.next;
	}
	if (node2 === null) {
		head = node1.next;
		return head;
	}
	while (node2.next !== null) {
		node1 = node1.next;
		node2 = node2.next;
	}
	node1.next = node1.next.next;
	return head;
}

function print(linkedList) {
	let output = "";
	let node = linkedList;
	while (node) {
		output += `${node.data} -> `;
		node = node.next;
	}
	output += null;
	console.log(output);
}

let list = [1, 2, 3];
let head = makeLinkedList(list);
linkedList = deleteKthNodeFromEnd(head, 2);
print(linkedList);
