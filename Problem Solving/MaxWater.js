// function mostWater(arr) {
//   let maxWater = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let height = Math.min(arr[i], arr[j]);

//       width = j - i;

//       let currentWater = height * width;

//       maxWater = Math.max(currentWater, maxWater);
//     }
//   }

//   return maxWater;
// }

// console.log(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
