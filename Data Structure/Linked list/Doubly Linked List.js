//Doubly Linked List Node class
class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

//Doubly Linked List class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //Add node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  // remove node from the end of the first
  removeFirst() {
    if (!this.head) return; // List is empty
    if (this.head === this.tail) {
      // Only one node in the list
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }

  // remove node from the end of the list
  removeLast() {
    if (!this.tail) return; // List is empty
    if (this.head === this.tail) {
      // Only one node in the list
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    return;
  }


// remove node at a specific position
removeAt(position) {

    if (position < 0) return; // Invalid position
    if (!this.head) return; // List is empty

    // if (position === 0) {
    //   // Remove head
    //   this.head = this.head.next;
    //   if (this.head) this.head.prev = null;
    //   else this.tail = null; // List became empty
    //   return;
    // }
    // let current = this.head;
    // let index = 1;  
    // while (current && index < position) {
    //   current = current.next;
    //   index++;
    // }   
    // if (!current) return; // Position out of bounds

    // if (current === this.tail) {
    //   // Remove tail
    //   this.tail = this.tail.prev;
    //   this.tail.next = null;
    // } else {
    //   // Remove middle node
    //   current.prev.next = current.next;
    //   current.next.prev = current.prev;
    // }   
    // return;

}

  // 🧾 Print List
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " ⇄ ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.removeAt(2);
// list.removeFirst();
// list.removeLast();
list.printList();
