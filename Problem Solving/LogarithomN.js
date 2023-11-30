// logarithom N problem

// Given a number N, return its logarithm to base 2.
function logarithmN(n) {
  while (n > 1) {
    // n > 1 because we want to stop when n = 1

    console.log(n); // printing the value of n

    n /= 2; // dividing n by 2
  }

  console.log("Done");
}

console.log(logarithmN(16)); // 16, 8, 4, 2, Done
