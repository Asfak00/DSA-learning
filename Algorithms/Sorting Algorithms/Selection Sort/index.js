function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestNum = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowestNum] > arr[j]) {
        lowestNum = j;
      }
    }

    let swape = arr[i];
    arr[i] = arr[lowestNum];
    arr[lowestNum] = swape;
  }

  return arr;
}

console.log(SelectionSort([2, 5, 6, 1, 9]));

const getTheSortedArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowerNumber = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowerNumber] > arr[j]) {
        lowerNumber = j;
      }
    }

    let swape = arr[i];
    arr[i] = arr[lowerNumber];
    arr[lowerNumber] = swape;
  }

  return arr;
};

console.log(getTheSortedArray([4, 562, 43, 2, 3, -20, 10]));
