// Linked list Insert at Last

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linked_list {
  constructor() {
    this.head = null;
  }

  // 1️⃣ Insert at First
  insertFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head; 
    this.head = newNode;
    console.log(this.head);
    
  }

  // 🧾 Print List
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " → ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

const list = new Linked_list();
list.insertFirst(10);
list.insertFirst(20);
list.insertFirst(30);
list.insertFirst(40);
list.printList();
