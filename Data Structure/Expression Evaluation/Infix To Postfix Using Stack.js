const result = infixToPostfix("8/2+7-4*2");
function infixToPostfix(expression) {
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };
  const stack = [];
  let postfix = "";

  for (let char of expression) {
    if (/[a-zA-Z0-9]/.test(char)) {
      postfix += char;
    } else if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        postfix += stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        precedence[char] <= precedence[stack[stack.length - 1]]
      ) {
        postfix += stack.pop();
      }
      stack.push(char);
    }
  }
  while (stack.length) {
    postfix += stack.pop();
  }
  return postfix;
}
console.log(`Postfix expression: ${result}`);
