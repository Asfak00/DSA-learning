function sumOfArraySlow(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sliceNumber = arr.slice(1);
    return arr[0] + sumOfArraySlow(sliceNumber); // 2 + [3,5] = [5,5] &  5 + 5 = 10
  }
}

// saving the time complexity
function sumOfArrayFast(arr) {
  return helper(arr, 0);
}

function helper(arr, index) {
  if (arr.length === index) {
    return 0;
  } else {
    return arr[index] + helper(arr, index + 1);
  }
}

// global input for all function
const dynamicArray = new Array(1000).fill(2);

// checking the time complexity of two codes
const now = Date.now();
console.log(sumOfArraySlow(dynamicArray));
const finish = Date.now();

console.log(`the slow function exicute time ${finish - now} ms`);

const start = Date.now();
console.log(sumOfArrayFast(dynamicArray));
const complete = Date.now();

console.log(`the fast function exicute time ${complete - start} ms`);
