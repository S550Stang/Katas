const sumLargestNumbers = function (data) {
  // Put your solution here
  data = data.sort((a, b) => a - b);
  let sum1 = data[data.length - 1];
  let sum2 = data[data.length - 2];

  return sum1 + sum2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
