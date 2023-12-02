// get the sum of input number
function sumOfNum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfNum(3));
