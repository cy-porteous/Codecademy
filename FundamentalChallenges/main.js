// // Write a function, reverseArray(), that takes in an array as an argument and

// returns a new array with the elements in the reverse order.

// // There’s a built-in array method called .reverse() that does a lot of this work for you,

// but you’re NOT allowed to use it here!

// Write your code here:

const reverseArray = arr => {
  let reversed = [];
   for (let i = arr.length - 1; i >= 0; i--) {
   reversed.push(arr[i]);
  }
   return reversed
 };


 // When you're ready to test your code, uncomment the below and run:

 const sentence = ['sense.','make', 'all', 'will', 'This'];

 console.log(reverseArray(sentence))
 // Should print ['This', 'will', 'all', 'make', 'sense.'];


//  -------------------------------------------------------------------------------

//  Write a function, greetAliens(), that takes in an array of strings and
//  uses a for loop to print a greeting with each string in the array.

// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”

// Write your code here:


const greetAliens = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
  }
}

// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

// -------------------------------------------------------------------------------------------------------

// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

// const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

// convertToBaby(animals);
// // Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

const convertToBaby = (arr) => {

  const animalsArray = [];
  for (let i = 0; i < arr.length; i++) {
    animalsArray.push('baby '+ arr[i])
    }
   return animalsArray
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));

// -------------------------------------------------------------------------------

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 5; counter >= 0; counter--){
  console.log(counter);
}

// ----------------------------------------------------------------------------------

// Write a function declineEverything() that takes in an array of strings and,

// using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

// The .forEach() function should apply politelyDecline() directly; it

// should NOT merely receive an argument function that uses politelyDecline().

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

const declineEverything = arr => {
  arr.forEach(politelyDecline)
};

declineEverything(veggies);

const acceptEverything = arr => {
  arr.forEach((x) => console.log(`Ok, I guess I will eat some ${x}.`))
};

acceptEverything(veggies);

// ----------------------------------------------------------------------------------------------

// Write a function, squareNums(), that takes in an

// array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

// You can test your function when you’re ready by passing in the numbers array

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

const squareNums = arr => arr.map(toSquare);

console.log(squareNums)

// ---------------------------------------------------------------------------------------------

// Write a function shoutGreetings() that takes in an array of strings and returns a new array.

// This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

const greetingss = ['hola', 'hello']

const shoutGreetings = arr => {
  const shoutOut = [];
  for (let i = 0; i < arr.length; i++) {
    shoutOut.push(arr[i].toUpperCase() + '!')
  }
  return shoutOut;

}

console.log(shoutGreetings(greetingss));

// -------------------------------------------------------------------------------------------------

// Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method,

// returns that array with the years sorted in descending order.

const sortYears = arr => arr.sort().reverse();

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))

// -------------------------------------------------------------------------------------------------

// Write a function justCoolStuff() that takes in two arrays of strings,

// and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

// let arr1 = ['this', 'not this', 'nor this'];
// let arr2 = ['thing 1', 'thing 2', 'this'];

// justCoolStuff(arr1, arr2); // Should return ['this']

const justCoolStuff = (arr1, arr2) => arr1.filter(x => arr2.includes(x))


const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

console.log(justCoolStuff(myStuff, coolStuff))

// -----------------------------------------------------------------------------------------------


// Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

// {name: 'cabbage', source: 'plant' }

// and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

var array = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

const isTheDinnerVegan = (arr) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].source === 'plant'){
      return true;
    } else {
      return false;
    }
  }
};

console.log(isTheDinnerVegan(array));

// --------------------------------------------------------------------------------------------------

// Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

// {speciesName: 'shark', numTeeth: 50 }

// and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

// You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison

// function, or use an anonymous function for your argument to .sort().

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];


const sortSpeciesByTeeth = (a,b) => {
  return a.numTeeth > b.numTeeth;
}

speciesArray.sort(sortSpeciesByTeeth);

console.log(speciesArray);

// ----------------------------------------------------------------------------------------------------------------

// Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'.

// If the keys are in the array, your function should return the index at which they can be found.

// If they’re not in the array, your function should return -1.

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'used gum', 'keys', 'plastic spoon'];

console.log(findMyKeys(randomStuff))

// -----------------------------------------------------------------------------------------------------------------

// Write a function subLength() that takes 2 parameters, a string and a single character.
// The function should search the string for the two occurrences of the character and return the length between them including the 2 characters.
// If there are less than 2 or more than 2 occurrences of the character the function should return 0.

// Examples:

// subLength('Saturday', 'a'); // returns 6
// subLength('summer', 'm'); // returns 2
// subLength('digitize', 'i'); // returns 0
// subLength('cheesecake', 'k'); // returns 0

function subLength(str, char) {
  let length = 0;
  const occuranceCount = Array
    .from(str)
    .filter((c) => c.toLowerCase() === char.toLowerCase())
    .length
  if (occuranceCount === 2) {
    const regex = new RegExp(`${char}(.*)${char}`)
    length = str.match(regex)[0].length
  }
  console.log(length)
  return length;
}

// Loop over string and count number of occurance
// if count is 2,
// Create a regex to capture the string in between.
// Return its length
// Else return 0

// -----------------------------------------------------------------------------------------------------------

// Write a function groceries() that takes an array of object literals of grocery items.

// The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'.

// Make sure spaces (' ') are inserted where they are appropriate.

// Examples:

// groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// // returns 'Carrots, Hummus, Pesto and Rigatoni'

// groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// // returns 'Bread and Butter'

// groceries( [{item: 'Cheese Balls'}] );
// // returns 'Cheese Balls'

const groceries = arr => {
  const array = [];
  arr.forEach(obj => {
    array.push(obj.item);
  });

  let str = '';
  for (let i=0; i < array.length; i++) {
    if (i === 0) {
      str += array[0];
    } else if (i === (array.length-1)) {
      str += ' and ' + array[i];
    } else {
      str += ', ' + array[i];
    }
  }

  return str;
}

console.log(groceries( [{item: 'Carrots'}] ));
