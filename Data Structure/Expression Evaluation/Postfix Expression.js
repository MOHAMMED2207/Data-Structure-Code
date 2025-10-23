// ممكن تستخدم النتيجة في عملية تانية
// مثال: تقييم النتيجة بعد التحويل
function evaluatePostfix(expression) {
  const stack = [];
  for (let token of expression) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
      }
    }
  }
  return stack.pop();
}
const postfixExpression = "82/7+42*-";
const result = evaluatePostfix(postfixExpression);
console.log(
  `Result of evaluating postfix expression ${postfixExpression} is: ${result}`
);
