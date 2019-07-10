// basic for loop simpleCounter
let simpleCounterArray = [];
const simpleCounter = () => {
  for (let n = 0; n < 10; n++) {
    simpleCounterArray.push(n);
    //console.log(n);
  }
};

simpleCounter();
document.getElementById("simpleLoop").innerHTML = `
  <code>'./recursion.js'</code>
  <div>for-loop: ${simpleCounterArray}</div>
`;

// Recursive version
// We need at least one base care and one recursion case
let recursiveCounterArray = [];
const recursiveCounter = n => {
  //console.log(n);
  if (n === 10) {
    // we need the base case here so that it doesn't go into an infinite loop
    return;
  }
  recursiveCounterArray.push(n);
  return recursiveCounter(n + 1); // return itself plus 1.
};

// We know that 10 is our goal (the base case) and we are starting from 0.
recursiveCounter(0); // we are starting from 0
// When using recursion, we have to think about what the goal is we are trying to achieve, that will be our base case.
document.getElementById("recursionLoop").innerHTML = `
  <i>Recursion is normall easier to read than loops.</i>
  <div>Recursive loop: ${recursiveCounterArray}</div>
`;

const items = [[1, 2, 3], [4, 5, 5, [6, [9]]]];

const findANumberInArray = (array, number) => {
  let hasNumber = "no!";
  array.forEach(a => {
    if (a === number) {
      hasNumber = "yes!";
    }
    if (Array.isArray(a)) {
      hasNumber =
        hasNumber === "yes!" ? hasNumber : findANumberInArray(a, number);
    }
  });
  return hasNumber;
};
let number = 9;
let isFound = findANumberInArray(items, number);
console.log(isFound);

const three = document.getElementById("recursionFindANumberInArray");
three.innerHTML = `
  <div>Find ${number} in items array: <code>[[1, 2, 3], [4, 5, 5, [6, [9]]]]</code> : ${isFound}</div>
`;
