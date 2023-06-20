const { LinkedList, print } = require("./linkedList");

function reverseLinkedList(head = null, previous = null) {
	if (head === null && previous === null) {
		return head;
	}
	const next = head.next;
	head.next = previous;
	if (next === null) {
		return head;
	}
	return reverseLinkedList(next, head);
}

let ll = new LinkedList([2, 3, 5, 7]);
ll = reverseLinkedList(ll);
print(ll);
