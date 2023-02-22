var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const newNums = numbers.map(function (x) {
  return x * 2;
});
console.log(newNums);
//Filter - Create a new array by keeping the items that return true.
const greater = numbers.filter(function (num) {
  return num < 10;
});
console.log(greater);
//Reduce - Accumulate a value by doing something to each item in an array.
let reduced = numbers.reduce(function (accumulator, currentNumber) {
  console.log(accumulator);
  return accumulator + currentNumber;
});
console.log(reduced);
//Find - find the first item that matches from an array.
let found = numbers.find(function (nums){
  return nums < 3
})
console.log(found)
//FindIndex - find the index of the first item that matches.
let index = numbers.findIndex(function (nums){
  return nums === 56
})
console.log(index)