class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 1️⃣ Insert at Last
  insertLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode; 
  }

  delete(data) {
    if (!this.head) return;
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

const list = new LinkedList();
list.insertLast(10);
list.insertLast(20);
list.insertLast(30);
list.insertLast(40);
list.print();

class Node2 {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  insertLast(data) {
    const newNode = new Node2(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    // current = Node { data: 10, next: null }

    while (current.next) {
      // current.next = null
      current = current.next; // current = null
    }

    // اشرح على اخر نود في اللينكد ليست
    //
    current.next = newNode; // current.next = Node { data: 20, next: null
  }

  prient() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(this.head);
  }
}

const list2 = new linkedList();
list2.insertLast(10);
list2.insertLast(20);
list2.insertLast(30);
// list2.insertLast(40)

list2.prient();
