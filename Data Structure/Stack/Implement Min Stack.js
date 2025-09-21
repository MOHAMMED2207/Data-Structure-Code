// 5️⃣ Implement 2 Stacks in 1 Array

// الفكرة:
// عندك Array واحد، وعايز تعمل فيه 2 Stacks.
// Stack1 يبدأ من أول Array → يمشي قدام.
// Stack2 يبدأ من آخر Array → يمشي لورا.
// يوقفوا لو اتقابلوا في النص.
// ليه Stack مهم؟
// استخدام ذكي للـ memory (بدون تضيع مكان).
// مثال حقيقي: أنظمة Embedded بتحاول تستغل الـ memory المحدود.
// الـ Complexity:
// Push / Pop / Peek لكل Stack → O(1).

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (
      this.minStack.length === 0 || // لو مفيش عناصر في المين ستاك
      x <= this.minStack[this.minStack.length - 1] // لو العنصر الجديد أصغر أو يساوي أصغر عنصر حالي
    ) {
      this.minStack.push(x); // ضيفه للمين ستاك
    }
  }

  pop() {
    const removed = this.stack.pop();// نشيل العنصر من الستاك الرئيسي
    if (removed === this.minStack[this.minStack.length - 1]) { // لو العنصر اللي اتشال هو أصغر عنصر حالي
      this.minStack.pop(); // نشيل العنصر من المين ستاك كمان
    }
    return removed;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const s = new MinStack();
s.push(5);
s.push(2);
s.push(8);
console.log(s.getMin()); // 2
s.pop();
console.log(s.getMin()); // 2
s.pop();
console.log(s.getMin()); // 5
