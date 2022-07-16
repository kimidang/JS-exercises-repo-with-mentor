// Exercise 1. Make an empty array named animals
let animals = [];

// Exercise 2. Add the string "frog" to the array

animals.push('frogs');
console.log(animals);

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.

animals.push('seal', 'pig', 'panda', 'rabbit');
console.log(animals);

// Exercise 4. Update the first item in the array to be "gorilla"

animals[0] = "gorilla";
console.log(animals);

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)

console.log(animals.length);

// Exercise 6. Print the first item in the array

console.log(animals[0]);

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)

console.log(animals[animals.length-1]);

// Exercise 8. Remove the last item from the array

animals.pop();
console.log(animals);

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.

let assortedThings = ["pasta",2,"salad",6,"bbq",10];


// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...

for (let i = 0; i <= assortedThings.length ; i++){
  console.log("Item #" + [i] + " is " + assortedThings[i]);
}

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.

function numbers(array) {
  for ( let i = 0; i < array.length ; i++){
    if (array[i] >= 100) {
      console.log(array[i] + " big");
    } else if  (array[i] < 100 && array[i] > 0){
      console.log(array[i] + " small");
    } else if ( array[i] < 0 ){
      console.log(array[i] + " negative");
    }
  }
}

let ticketCount = [10,345,-2];
console.log(numbers(ticketCount));
let crazyPeople = [892,37,-100,100,0];
console.log(numbers(crazyPeople));



// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

let me = {
  name : "kimberly",
  favoriteAnimal : "Panda",
  favoriteNumber : "26",

};
console.log(me);

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)

me.favoriteWeather = "Fall";
me.favoriteCandy = "Three Musketeers";
console.log(me);

// Exercise 14. Update the favoriteAnimal value to something different
me.favoriteAnimal ="koala";
console.log(me);

// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.

console.log(me.favoriteAnimal);
console.log(me["favoriteAnimal"]);


//Hello,Object
//Write the code, one line for each action: Create an empty object user.  Add the property name with the value John. Add the property surname with the value Smith. Change the value of the name to Pete. Remove the property name from the object.

let user = {
};
user.name = "John",
user.surname = "Smith",


console.log(user);

user.name = "Pete",
delete user.surname,

console.log(user);

//Check for emptiness
//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  for (let key in obj){
    return false;
  } 
    return true;
}
console.log(isEmpty({pets:1}));
console.log(isEmpty("Hello"));
console.log(isEmpty(""));

//Sum Object Properties
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for ( let keys in salaries) {
  sum += salaries[keys];
}

alert(sum);


//Multiply Numeric Property Values by 2
//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(obj){
  for (let key in obj){
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.

//for number 15 I used this as a reference: //https://www.freecodecamp.org/news/javascript-object-keys-tutorial-how-to-use-a-js-key-value-pair/---this helped me with the 2nd way to get the value of a key
//for number 11 I used https://stackoverflow.com/questions/19182266/how-to-convert-an-integer-into-an-array-of-digits. For this one I was having a hard time converting the numbers into an array only to figure out I just needed to put my test in []. I did also try to attempt another way on this problem I'm still figuring it out.

