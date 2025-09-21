// 4) Evaluate Postfix Expression
// — تقييم تعبير بوستفيكس (Reverse Polish Notation)
// صيغة الـ postfix تفصل الأرقام والمشغلات بمسافات في هذا المثال، مثل "2 3 + 5 *".
function evaluatePostfix(expr) {
  const stack = [];
  const tokens = expr.trim().split(/\s+/); // تفصل حسب أي فراغات متتابعة

  for (const token of tokens) {
    if (!isNaN(token)) {
      // رقم (يشمل multi-digit و negative مثل "-5")
      stack.push(Number(token)); // نحول النص لرقم ونضيفه للستاك
    } else {
      // operator: نفترض المعامل ثنائي
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined)
        throw new Error("Invalid expression");

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
          break; // note: JS uses floating division
        default:
          throw new Error("Unsupported operator: " + token);
      }
    }
  }

  if (stack.length !== 1) throw new Error("Invalid expression");
  return stack.pop();
}

console.log(evaluatePostfix("2 3 + 5 *")); // 25
console.log(evaluatePostfix("10 2 / 3 +")); // 8  (10/2=5; 5+3=8)
console.log(evaluatePostfix("5 1 2 + 4 * + 3 -")); // 14 (مثال مشهور)
