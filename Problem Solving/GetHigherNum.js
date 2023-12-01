// create a function which return the highest number from the array avoiding the error in a array
function getHigherNumber(arr) {
  let higherNum = arr[0]; // define a variabe for store high number and set the initial in array first index value
  let lowerNum = arr[0]; // define a variabe for store lower number and set the initial in array first index value

  for (let i = 0; i < arr.length; i++) {
    // check if there is an error
    if (typeof arr[i] !== "number") continue;

    // check if higherNum is smallar then arr[i]
    if (higherNum < arr[i]) {
      higherNum = arr[i]; // set the higherNum value as arr[i]
    }

    // check if lowerNum is bigger then arr[i]
    if (lowerNum > arr[i]) {
      lowerNum = arr[i]; // set the lowerNum value as arr[i]
    }
  }

  return higherNum - lowerNum; // return the division of higherNum and lowerNum
}

const demoArray = [-2, 4, 35, 767, 3, 6, "error", "&", "*", "@"]; // demo array which used for testing

console.log(getHigherNumber(demoArray));
