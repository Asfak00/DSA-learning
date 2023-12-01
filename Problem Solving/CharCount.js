// character count
function charCount(str) {
  let charList = {}; // define the empty variable for store the all character in the string

  for (let i = 0; i < str.length; i++) {
    // check if there is an uppercase element and define the sperate element from string
    let char = str[i].toLowerCase();

    // we don't need to return space with our output thats why we avoid the all space and unnecessary thing from our strign without a-z character
    if (char.match(/[a-z]/)) {
      // check if already has this character in our charList variable then we just increment our exits character value by 1, otherwise we assign the new character in our charList variable
      if (charList[char] > 0) {
        charList[char]++;
      } else {
        charList[char] = 1;
      }
    }
  }

  // return the charList variable
  return charList;
}

console.log(charCount("Ami Rahi Ahmed"));
