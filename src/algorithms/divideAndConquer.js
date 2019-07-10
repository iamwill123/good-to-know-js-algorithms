// for loop sum
const sum = arr => {
  let total = 0;
  for (let i of arr) {
    total += i;
  }
  return total;
};

let sampleArr = [1, 2, 3, 4, 5];
let sumOfArr = sum(sampleArr);
//console.log(sumOfArr);

// Divide and Conquer
// composed by using recursive functions to create a base case and to divide or decrease a problem until it becomes the base case.
const sumDC = arr => {
  console.log(arr);
  if (arr.length === 0) return 0;
  return arr[0] + sumDC(arr.slice(1));
};

let sumOfArrDandC = sumDC(sampleArr);
console.log(sumOfArrDandC);

const divideAndConquer = document.getElementById("divideAndConquer");
divideAndConquer.innerHTML = `
  <div> Divide and Conquer Sum: ${sumOfArrDandC}</div>
`;

// 1 + sum([2,3,4,5])
// 2 + sum([3,4,5])

// 0 + 5
// 5 + 4
// 9 + 3
// 12 + 2
// 14 + 1
