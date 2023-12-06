function findIndexFromArray(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }

  return "index not matched";
}

console.log(findIndexFromArray([5, 56, 2], 0));
