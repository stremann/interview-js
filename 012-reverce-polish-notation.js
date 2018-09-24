function isOperation(item) {
  return ['+', '-', '*', '/'].includes(item);
}
function applyOperation(operation, item1, item2) {
  switch(operation) {
    case '+': return item1 + item2;
    case '-': return item1 - item2;
    case '*': return item1 * item2;
    case '/': return item1 / item2;
  }
}
function calculateRevercePolishNotation(arr) {
  const stack = [];
  let item;
  while(item = arr.shift()) {
    if (isOperation(item)) {
      stack.push(applyOperation(item, stack.pop(), stack.pop()))
    } else {
      stack.push(item);
    }
  }
  return stack.pop();
}



const array = [1, 2, '+', 4, '*', 3, '+'];
console.log(calculateRevercePolishNotation(array)) // 15
