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
// console.log(isBalanced("({[]})")); // true
// console.log(isBalanced("({[})")); // false
// console.log(isBalanced("((()))")); // true
// ---------------------------------------------------------------------------------------------------------------------
console.log("---------------------------");
// ---------------------------------------------------------------------------------------------------------------------
function isBalancedv2(str) {
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
    }

    const isClosing = stack.includes(pairs[char]);
    if (char === ")" || char === "]" || char === "}") {
      if (!isClosing || stack.pop() !== pairs[char]) {
        return false; // Mismatch
      }
    }
  }
  if (stack.length === 0) {
    return true; // Stack must be empty if balanced
  } else {
    return;
  }
}
// console.log(isBalancedv2("({[]})")); // true
// console.log(isBalancedv2("({[})")); // false
// console.log(isBalancedv2("((()))")); // true


// simple way to check balanced parentheses
function isBalancedSimple(str) {
  while (str.includes("()") || str.includes("[]") || str.includes("{}")) {
    str = str.replace("()", "").replace("[]", "").replace("{}", "");
  } 
  return str.length === 0;
}
console.log(isBalancedSimple("({[]})")); // true
console.log(isBalancedSimple("({[})")); // false
console.log(isBalancedSimple("((((()))")); // true

