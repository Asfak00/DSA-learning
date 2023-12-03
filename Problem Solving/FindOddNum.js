function findOddNum(arr) {
  let oddNum = [];

  arr.map((num) =>
    num % 2 !== 0 ? oddNum.push(num) : "there not have odd number "
  );

  return oddNum;
}

console.log(findOddNum([3, 5, 2, 4, 7]));

// in recursion way
function findOddNumber(arr) {
  let oddNumbers = [];

  function helperFunc(input) {
    if (input.length === 0) return;

    if (input[0] % 2 !== 0) {
      oddNumbers.push(input[0]);
    }

    helperFunc(input.slice(1));
  }

  helperFunc(arr);

  return oddNumbers;
}

console.log(findOddNumber([5, 9, 6, 2]));
