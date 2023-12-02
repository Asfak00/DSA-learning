// using indexOf method
function sameArray(array1, array2) {
  // check the length of array1 and array2
  if (array1.length !== array2.length) {
    return false;
  }

  // loop through the array1
  for (let i = 0; i < array1.length; i++) {
    // find the current index of array2 element
    let currentIndex = array2.indexOf(array1[i] ** 2);

    // if the current index is not found then return false
    if (currentIndex === -1) {
      return false;
    } else {
      // if there has a value in current index variable then remove the value from array2
      array2.splice(currentIndex, 1);
    }
  }

  // if all the value of array1 is found in array2 then return true
  return true;
}

console.log(sameArray([2, 3], [4, 9, 36])); // false

// using find method
function sameArray(array1, array2) {
  // check the length of array1 and array2
  if (array1.length !== array2.length) {
    return false;
  }

  // loop through the array1
  for (let i = 0; i < array1.length; i++) {
    // find the current index of array2 element
    let matchedElement = array2.find((element) => element === array1[i] ** 2);

    if (!matchedElement) {
      return false;
    } else {
      // if there has a value in current index variable then remove the value from array2
      array2.splice(array2.indexOf(matchedElement), 1);
    }
  }

  // if all the value of array1 is found in array2 then return true
  return true;
}

console.log(sameArray([2, 3, 6], [4, 9, 37, 4])); // false
