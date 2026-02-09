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

  insertSorted(value) {
    const newNode = new Node(value);

    // 1️⃣ لو الليست فاضية
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // 2️⃣ لو القيمة أصغر من أول عنصر
    if (value <= this.head.data) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // 3️⃣ لف في الليست
    let current = this.head;

    while (current.next && current.next.data < value) {
      current = current.next;
    }

    // 4️⃣ إدخال العنصر
    newNode.next = current.next;
    current.next = newNode;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " → ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

const list = new LinkedList();
list.insertSorted(30);
list.insertSorted(10);
list.insertSorted(20);
list.insertSorted(25);
list.insertSorted(5);
list.insertSorted(11);

list.print(); // 5 → 10 → 20 → 25 → 30 → null