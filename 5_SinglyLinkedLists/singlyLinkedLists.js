// linked list is data structor that is ordered similar to an array
// but linked list doesn't have indices but rather
// a bunch of elements which points to the next element.

// link list contains head which is the first element and tail which
// the last element and the length property

// linked lists consist of nodes, and each node has a value and
// a pointer to another node or null

class Node {
  // piece of data - val
  // refernce to next node - next
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("you");
list.pop();
list.pop();
console.log(list);
