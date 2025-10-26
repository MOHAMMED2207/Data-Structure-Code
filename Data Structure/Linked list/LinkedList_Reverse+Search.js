// Linked List Reverse,Search

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList_V2 {
  constructor() {
    this.head = null;
  }

  append(data) {
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

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next; // 1️⃣ احفظ اللي بعده
      current.next = prev; // 2️⃣ اعكس الاتجاه
      prev = current; // 3️⃣ حرّك prev
      current = next; // 4️⃣ حرّك current
    }

    this.head = prev; // 5️⃣ آخر عقدة قديمة = أول عقدة جديدة
  }

  searchlist(value) {
    let current = this.head;
    let position = 1;

    while (current) {
      if (current.data === value) {
        return console.log(`Found at position ${position}`);
      }
      current = current.next;
      position++;
    }

    return console.log("Not found");
  }

  printList() {
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

const list = new LinkedList_V2();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.reverse();
list.printList();
list.searchlist(10);
