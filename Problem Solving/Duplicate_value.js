// duplicate value

function duplicateValue(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let singleElementFromArray = arr[i]; // taking a single element from the array

    if (!newArr.includes(singleElementFromArray)) {
      // checking if the element is already in the new array

      newArr.push(singleElementFromArray); // pushing the element in the new array
    }
  }

  return newArr;
}

console.log(duplicateValue([1, 2, 3, 4, 4, 5, 6, 7, 4, 4, 5, 6, 7, 8, 9, 10]));
