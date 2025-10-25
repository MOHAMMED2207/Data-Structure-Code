// Node structure
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Queue using LinkedList
class Queue {
  constructor() {
    this.front = null; // بداية الطابور
    this.rear = null; // نهاية الطابور
    this.size = 0; // حجم الطابور
    this.capacity = 10; // السعة القصوى للطابور
  }

  // Enqueue - إضافة عنصر
  enqueue(data) {
    const newNode = new Node(data);

    if (this.isFull()) {
      console.log("Queue is full. Cannot enqueue", data);
      return;
    }
    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  isFull() {
    return this.size === this.capacity;
  }
  // Dequeue - إزالة أول عنصر
  dequeue() {
    if (!this.front) return null; // فاضي
    const data = this.front.data;
    this.front = this.front.next;

    // لو أصبح فاضي بعد الحذف
    if (!this.front) this.rear = null;

    return data;
  }

  // Peek - عرض أول عنصر
  peek() {
    return this.front ? this.front.data : null;
  }

  //   isEmpty - التحقق إذا الطابور فاضي
  isEmpty() {
    return this.front === null;
  }

  clear() {
    this.front = this.rear = null;
    this.size = 0;
  }

  // Print - عرض العناصر
  print() {
    let current = this.front;
    let result = "";
    while (current) {
      result += current.data + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

// ✅ مثال للاستخدام
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // 10 20 30

console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 10
queue.print(); // 20 30

console.log("Front:", queue.peek()); // 20
console.log("Empty:", queue.isEmpty()); // false
