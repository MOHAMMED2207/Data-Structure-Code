// 3️⃣ Reverse a String using Stack
// الفكرة:
// عايز تعكس string.
// مثال: "ABC" → "CBA".
// ليه Stack مهم؟
// لما تحط الحروف في Stack، أول حرف دخل هو آخر واحد يطلع → النتيجة عكس.
// الـ Complexity:
// Time → O(n) (بتمر على كل حرف).
// Space → O(n) (stack يخزن الحروف).
function reverseString(str) {
  const stack = [];

  // Push all characters onto the stack
  for (let char of str) {
    stack.push(char);
  }
  let reversedStr = "";
  // Pop all characters from the stack to get them in reverse order
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

// Example usage:
const originalString = "Hello, World!";
const reversed = reverseString(originalString);
console.log(reversed); // Output: !dlroW ,olleH
