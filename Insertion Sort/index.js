function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      console.log(arr[j], arr[j - 1]);
    }
  }

  return arr;
}

console.log(InsertionSort([5, 3, 2, 1, -3, 67, 32]));
