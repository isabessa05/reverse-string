function reverseString(str) {

  for (let i = 0; i < str.length; i++) {
    let newArray= []
    newArray.push(i)
    newArray.join('')
    console.log(newArray)
  }

  return newArray
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// We're going to iterate through this array first with the MAP method, but we could also use a for loop
// While iterating, we are creating a new constant that it's gonna be a empty array. This array will be the recipient for our reversed string
//For each item, we are add the item to the new array with the push method
//Afterwards, we will join the elements of the array into a string with the method array.join(''). 
//An empty parameter will join the elements of the array without spaces

