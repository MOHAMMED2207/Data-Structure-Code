// // stack introduction
// تمام 👌 خلينا نبدأ مع Stack Implementation in JavaScript.
// الـ Stack بيشتغل بمبدأ:
// ➡️ LIFO (Last In, First Out) يعني آخر عنصر دخل هو أول عنصر يخرج.
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    // add element to the top of the stack
    this.items.push(element);
  }
  pop() {
    // remove element from the top of the stack
    if (this.isEmpty()) {
      return "Underflow"; // Stack is empty
    }
    return this.items.pop(); // remove LAST element from the stack
  }

  UniqDelete(position) {
    const positionDelete = this.items[position];
    this.items.splice(position, 1);
    console.log(
      `will dalete ${positionDelete} this is start result ${this.items}`
    );
  }

  peek() {
    // view the top element of the stack // LAST element
    if (this.isEmpty()) {
      return "No elements in Stack"; // Stack is empty
    }
    return this.items[this.items.length - 1]; // return LAST element in the stack
  }
  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
  print() {
    return this.items.toString();
  }
}

// Example usage:
const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.print());
// [10,20 ,30] is the stack now
stack.UniqDelete(2); 
console.log(stack.print()); // Output: 10,20,30
console.log(stack.peek()); // view Output: 30
console.log(stack.pop()); // delete Output: 30
console.log(stack.print()); // Output: 10,20
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
//--------------------------------------------------------------------------------
