// dubble array

function dubbleArray(arr) {
  let newArr = []; // initial a new empty array
  for (let i = 0; i < arr.length; i++) {
    // looping through the array

    newArr.push(arr[i] * 2); // pushing the new value to the new array with multiply the value by 2
  }

  return newArr;
}

console.log(dubbleArray([3, 4, 5])); // [6, 8, 10]
