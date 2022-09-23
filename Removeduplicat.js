let arr = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));
