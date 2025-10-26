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

  // 1️⃣ Insert at position
  insert_at_position(data, position) {
    if (position < 1) {
      console.log("❌ Invalid position");
      return;
    }
    const newNode = new Node(data);
    // Case: insert at head (position 1)
    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Walk to the node just before the desired position
    let current = this.head;
    let prev = null;
    let index = 1;
    while (current && index < position) {
      prev = current;
      current = current.next;
      index++;
    }

    // If index === position, prev is the node at position-1
    // If we reached end (current === null) and index === position, we are inserting at tail
    // If index < position then position is out of range
    if (index !== position) {
      console.error("Position out of range");
      return false;
    }

    // Insert newNode between prev and current
    prev.next = newNode;
    newNode.next = current;
    return true;
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
list.insert_at_position("A", 1);
list.insert_at_position("B", 2);
list.insert_at_position("C", 3);
list.insert_at_position("D", 4);

list.insert_at_position("X", 2);
list.print();
