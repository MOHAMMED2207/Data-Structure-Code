// Singly Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // الإضافة في النهاية - O(1)
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // الإضافة في البداية - O(1)
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // ربط العقدة الجديدة بالرأس الحالي
      this.head = newNode; // تحديث الرأس ليكون العقدة الجديدة
    }

    this.length++; //
    return this;
  }

  // الإدراج في موضع معين - O(n)
  insert(index, data) {
    if (index >= this.length) {
      return this.append(data);
    }

    if (index === 0) {
      return this.prepend(data);
    }

    const newNode = new Node(data); // inheritance
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  // الحذف - O(n)
  remove(index) {
    if (index >= this.length || index < 0) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;

    if (index === this.length - 1) {
      this.tail = leader;
    }

    this.length--;
    return this;
  }

  // الوصول لعقدة معينة - O(n)
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // طباعة القائمة
  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return array;
  }

  // البحث - O(n)
  search(data) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    return -1;
  }

  // عكس القائمة - O(n)
  reverse() {
    if (!this.head.next) {
      return this;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this;
  }
}

// استخدام
const myLinkedList = new LinkedList();
myLinkedList.append(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList()); // [1, 10, 99, 5, 16]
myLinkedList.remove(2);
console.log(myLinkedList.printList()); // [1, 10, 5, 16]
myLinkedList.reverse();
console.log(myLinkedList.printList()); // [16, 5, 10, 1]
