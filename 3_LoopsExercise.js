// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let numbers = 1;
while (numbers < 6){
  console.log(parseInt(numbers));
  numbers ++;
}


// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let maxNumber= 5;
let minNumber = 1;
do {
  minNumber++
  console.log(parseInt(minNumber))
} while (minNumber < maxNumber);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for (let i = 0; i<=5; i++){
  console.log(parseInt(i));
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//while loop
let age = 10;
while (age >= 1){
  console.log(parseInt(age));
  age--;
}

//do while loop
let chocolateBars = 11;
let eatenedCandy = 1;
do {
    chocolateBars--
    console.log(parseInt(chocolateBars))
} while (eatenedCandy < chocolateBars);

// for loop
for (let i = 10; i>0; i--){
  console.log(parseInt(i));
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.


//while loop
let games = 7;
while (games < 28){
  console.log(parseInt(games));
  games++;
}



//do while loop
let iceCream = 6;
let eatenedIceCream = 27;
do {
    iceCream++
    console.log(parseInt(iceCream))
} while (iceCream < eatenedIceCream);



// for loop
for (let i = 7; i<28; i++){
  console.log(parseInt(i));
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.


//while loop
let bacteria = 10;
while (bacteria < 100){
  console.log(parseInt(bacteria));
  bacteria += 10;
}

//do while loop
let sleepTime = 0;
let dreamingMinutes = 100;
do {
    sleepTime += 10
    console.log(parseInt(sleepTime))
} while (sleepTime < dreamingMinutes);



// for loop
for (let i = 10; i<101; i += 10){
  console.log(parseInt(i));
} 


// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour--;
}
// it will keep going because as you subtract 1 from counterFour it will always be less than 2 therefore it will keep printing infintely. 
//in other words, condition will always be true and will keep running.

//fixed loop
let counterFour = 1;
while (counterFour > -101) {
  console.log("HELP ME!");
  counterFour--;
}



// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.


let favNumber  = 0;
while (favNumber < 27){
  console.log(parseInt(favNumber));
  favNumber++;
}

let n = -1;
do {
      n ++
      console.log(parseInt(n))
} while (n < 26);


for ( let i = 0; i<27;i++){
  console.log(parseInt(i));
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

for ( let x = 0; x < 101; x ++){
  if (x === 26) {
    console.log(x + " my favorite number!")
  } else {
    console.log( x + " not my favorite number.")
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//while loop - better for when you do not know number of iterations you need to do
// do while loop- better when you are asking a question and executed at least once
//for loop- when you know the number of times the loop should run

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/


for (let outsideCounter = 0; outsideCounter <= 3 ; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter ; insideCounter>=1; insideCounter-- ) {
     console.log("inside" , insideCounter)
  }   
}
 

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//https://stackoverflow.com/questions/6710601/when-to-use-while-loop-rather-than-for-loop, https://www.tutorialrepublic.com/javascript-tutorial/javascript-loops.php,https://mathbits.com/MathBits/CompSci/looping/whichloop.htm
// i used mdn, quora, my notes from codecademy, practice problems from codecademy. 
//question 10 it was a bit tough to fix my condidition for my 2nd for loop. i looked at this https://stackoverflow.com/questions/9830650/how-to-stop-a-javascript-for-loop but i had to keep looking at my condition also question 9 helped me in this problem. 


// Email your file to us or commit your file to GitHub and email us a link.
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
