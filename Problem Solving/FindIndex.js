function findIndex(arr, index) {
  let result = arr.indexOf(index);

  if (result === -1) {
    return "invalid index";
  }

  return result;
}

console.log(findIndex([3, 5, 23, 60], 2));
