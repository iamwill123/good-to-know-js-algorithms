// Create a function that loops through array for largest number
// Create a function that loops through list calling ^^, removing largest from list
const itemsToSort = [3, 2, 4, 1, 6, 10, 20];

const findLargestValue = list => {
  // we want to sort the array of numbers from greatest to least.
  let lrg = list[0]; // We setup the first (0) index value of (3) as the largest, because we want the largest number first and we need a number for the initial comparison
  let indexOfLarge = 0;
  for (let i = 1; i <= list.length; i++) {
    if (lrg < list[i]) {
      lrg = list[i];
      indexOfLarge = i;
    }
  }
  return indexOfLarge;
};

const selectionSort = list => {
  let newList = [];
  let lrgItem;
  while (list.length) {
    // run while the length of list is not equal to 0
    lrgItem = findLargestValue(list); // this returns the index of largest number
    newList.push(list[lrgItem]); // we then push the value at that specific index to our newList array.
    list.splice(lrgItem, 1); // we remove, using splice, the largest number from our original list after it's been pushed to the newList.
  }
  return newList;
};

let sorted = selectionSort(itemsToSort);
console.log(sorted);

// The selection sort is not as fast in sorting, it uses 2 loops:
// O(n x n) or O(n^2)
document.getElementById("selectionSort").innerHTML = `
  <div> Selection Sort <code>[3, 2, 4, 1, 6, 10, 20]</code>:  ${sorted}</div>
`;
