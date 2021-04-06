// function findLongestWordLength(str) {
//   let arr = str.split(" ");
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].length);
//   }
//   newArr.sort((a, b) => a - b);

//   return newArr[newArr.length - 1];
// }

function findLongestWordLength(str) {
  let res = 0;
  let temp = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      res = Math.max(res, temp);
      temp = 0;
    } else {
      temp++;
    }
  }
  return Math.max(res, temp);
}

console.log(
  findLongestWordLength(
    "When the whole world is about to rain, let’s make it clear in our heart tefefewfogether."
  )
);
