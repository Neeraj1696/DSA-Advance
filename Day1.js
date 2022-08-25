let arr = [[1, 2], [1, 3], [2], [3], [1, 7], [3]];

let stack = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === 1) {
    stack.push(arr[i][1]);
  } else if (arr[i][0] === 2) {
    stack.pop();
  } else {
    console.log(stack[stack.length - 1]);
  }
}
