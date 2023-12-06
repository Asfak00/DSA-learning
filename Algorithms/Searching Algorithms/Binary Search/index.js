function binarySearch(arr, value) {
  let startPoint = arr[0];
  let endPoint = arr.length - 1;
  while (startPoint <= endPoint) {
    let middlePoint = Math.floor((startPoint + endPoint) / 2);

    if (arr[middlePoint] === value) {
      return middlePoint;
    }

    if (value < arr[middlePoint]) {
      endPoint = middlePoint + 1;
    } else if (value > arr[middlePoint]) {
      startPoint = middlePoint - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 12, 34, 56, 78], 34));
