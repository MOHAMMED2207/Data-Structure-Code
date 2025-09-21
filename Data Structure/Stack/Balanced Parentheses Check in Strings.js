// Balanced Parentheses Check in Strings
// عايزين نتحقق إن كل قوس مفتوح له قوس مقفل مظبوط.
// مثال:
// ✅ "({[]})" → Balanced
// ❌ "({[})" → Not Balanced

function isBalanced(str) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of str) {
    // If it's an opening bracket, push to stack
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.pop() !== pairs[char]) {
        return false; // Mismatch
      }
    }
  }

  return stack.length === 0; // Stack must be empty if balanced
}

console.log(isBalanced("({[]})")); // true
console.log(isBalanced("({[})"));   // false
console.log(isBalanced("((()))"));  // true
