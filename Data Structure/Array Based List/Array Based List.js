//  Array Based List
class ArrayBasedList {
  constructor() {
    this.items = [];
    this.maxSize = 100;
  }
  // Add an element to the end of the list
  add(data) {
    if (this.items.length >= this.maxSize) {
      console.log("List is full. Cannot add", data);
      return;
    }
    if (data !== undefined && data !== null) {
      this.items.push(data);
    }
  }
  // add insert at index
  insert(index, data) {
    if (index < 0 || index > this.items.length) {
      console.log("Index out of bounds");
      return;
    }
    for (let i = this.items.length; i > index; i--) {
      this.items[i] = this.items[i - 1];
    }
    this.items[index] = data;
  }
  // Remove an element from the list by index
  remove(index) {
    if (index < 0 || index >= this.items.length) {
      console.log("Index out of bounds");
      return null;
    }
    return this.items.splice(index, 1)[0];
  }
  // Get an element by index
  get(index) {
    if (index < 0 || index >= this.items.length) {
      console.log("Index out of bounds");
      return null;
    }
    return this.items[index];
  }
  // Remove the last element
  pop() {
    return this.items.pop();
  }
  claer() {
    this.items = [];
  }
  //is Empty
  isEmpty() {
    return this.items.length === 0;
  }
  //if Full
  isFull() {
    return this.items.length === this.maxSize;
  }
  // Get the size of the list
  size() {
    return this.items.length;
  }
  // Print the list
  printList() {
    console.log(this.items.join(" -> ") + " -> null");
  }
}

// Example usage:
const arrayList = new ArrayBasedList(); // instance of ArrayBasedList
arrayList.add(10);
arrayList.add(20);
arrayList.add(30);
arrayList.printList(); // 10 -> 20 -> 30 -> null
arrayList.insert(1, 15);
arrayList.printList(); // 10 -> 15 -> 20 -> 30 -> null
console.log("Removed:", arrayList.remove(2)); // Removed: 20
arrayList.printList(); // 10 -> 15 -> 30 -> null
console.log("Element at index 1:", arrayList.get(1)); // Element at index 1: 15
console.log("Popped:", arrayList.pop()); // Popped: 30
