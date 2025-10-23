// Queue for FIFO (First In First Out) data structure
class Queue {
  constructor() {
    this.items = [];
  }
  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }
  // Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow - Queue is empty";
    }
    return this.items.shift();
  }
  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return "Front element of Queue: " + this.items[0];
  }
  rear() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[this.items.length - 1];
  }
  // Get the size of the queue
  size() {
    return "Size of Queue: " + this.items.length;
  }
  // Print the elements of the queue
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str.trim();
  }
}
// Example usage:
const queue = new Queue();
queue.enqueue(10); // Enqueue 10
queue.enqueue(20); // Enqueue 20
queue.enqueue(30); // Enqueue 30
console.log(queue.printQueue()); // Print the queue // Output: 10 20 30
console.log(queue.dequeue()); // Dequeue an element // Output: 10
console.log(queue.front()); // Get the front element // Output: 20
console.log(queue.isEmpty()); // Check if the queue is empty // Output: false
console.log(queue.size()); // Get the size of the queue // Output: 2
console.log(queue.printQueue()); // Print the queue // Output: 20 30
console.log(queue.front()); // Get the front element // Output: 20
console.log(queue.rear()); // Get the rear element // Output: 30
