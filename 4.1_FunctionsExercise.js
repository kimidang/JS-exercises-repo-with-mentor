// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

function logGreeting() {
	console.log("Hello!");
}

logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

function getName(){
  return "Kimberly";
}
console.log(getName());

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

function logGreeting2(){
  let myName = "Kimberly";
  console.log("Hello! My name is " + myName);
}
logGreeting2();

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function sumOfNumbers(a,b,c){
  return a + b + c;
}

console.log(sumOfNumbers(21,22,23));
console.log(sumOfNumbers(3,5,7));
console.log(sumOfNumbers(6,10,2));
console.log(sumOfNumbers(222,111,821));


// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

function museumDiscount(age){
  if ( age >=65 || age <= 14 ){
    return true;
  } else {
    return false;
  }
}

console.log(museumDiscount(26));
console.log(museumDiscount(45));
console.log(museumDiscount(2));
console.log(museumDiscount(1));
console.log(museumDiscount(65));
console.log(museumDiscount(100));
console.log(museumDiscount(14));

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

function hotDay(str, num) {
  let newString = [];
  for (let i =0; i < num ; i++){
    newString.push(str)
  }
  return newString.join('');
}

console.log(hotDay("Its hot ", 3));
console.log(hotDay("need coffee  ", 6));
console.log(hotDay("almost my birthday  ", 26));
 

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
// 2. What prints out for the value of y
// 3. What prints out for the value of z
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// mysteryFunction1 is the function name, it will be executed when something calls it. When it is executed the value inside the parentheses will mutiply by 2.
//the value of y is 4 
//the value of z is 8. 
//I was right with the values of x and y. Y is already defined as 4 and it also cannot be changed because we used the const variable. 
//Z is 8 because we call mysteryFunction with the y value with is 4. The 4 is our p1 value and will be multiplied by 2 which equals 8. 

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
// 2. What prints out for the value of a
// 3. What prints out for the value of b
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

//mysteryFunction2 has a parameter with 2 integers/values (p1,p2) which will be passed in the function. When it is called on it will take the first argument (p1) and subtract the second argument (p2) and that value will be retured. 
//a is 6
//b is 5
// I got both values correct. For a, the parameter (10,4) will be past into the function as p1,p2 respectively. When we subtract 4 from 10 we get 6 as our a valuye. Now that we have our a value then we can pass the new a value and 1 into the function to get our b value. So 6 - 1 is 5 and that is our b value. 


// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice";

const groceryList = "eggs,carrots,orange juice";
  const food = groceryList.split(',');
console.log(food);

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";

const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
  const morning = mySchedule.split("-->", 2);
console.log(morning);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// For number 9, I was having a hard time figuring out how my array wasn't splitting in the way I wanted it to be. It was splitting at the spaces and not by comma.
//I used this resource (https://www.tutorialrepublic.com/faq/how-to-convert-comma-separated-string-into-an-array-in-javascript.php#:~:text=Answer%3A%20Use%20the%20split(),to%20an%20array%20of%20characters.)
//This allowed me to figure out that I needed a comma in my " " . By figuring out this allowed me to figure out the second problem in #9 since I had the same issue. 
// This link also helped me with #6 (https://stackoverflow.com/questions/1877475/repeat-a-string-in-javascript-a-number-of-times)
//I didnt know how my for loop should look like because I was assuming I should go in a descending loop order but the link showed me how to do it in a ascending order. 


// Email your file to the course staff,
// or commit your file to GitHub and email us a link..
