function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let swipeArr = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swipeArr;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([-4, 6, 2, 56, 1, 54, 68]));
