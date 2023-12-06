// get the sum of input number
function sumOfNum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfNum(3));

// using recursion way
function sumOfNum(n) {
  if (n < 0) {
    return 0;
  } else {
    return n + sumOfNum(n - 1);
  }
}

console.log(sumOfNum(3));
