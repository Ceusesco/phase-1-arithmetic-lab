
// Write your code here
// ## Assignment

// There are four challenges we need you to solve. Code your solution in
// `index.js`. We'll provide some brief instructions here, but you should really
// rely on the test failure messages to guide your code.

// ## Instructions

// 1. Create a variable called `multiply` set to an equation that will multiply the
//    variables `num1` and `num2`; the result of the multiplication should be `62`.....(31*2)
// 2. Create a variable called `random` that will generate a random integer greater
//    than 0.
// 3. Create a variable called `mod` set to an equation that will calculate the
//    remainder of dividing variable `num3` by `num4`; the remainder should be `4`....(59/4)
// 4. Create a variable called `max` that finds the highest number in a set; the
//    value returned should be `20`.....(5,10,15,20)

// After you have all the tests passing, remember to commit and push your changes
// up to GitHub, then submit your work to Canvas using CodeGrade. If you need a
// reminder, go back to the [Completing and Submitting Assignments with
// CodeGrade][completing-codegrade] lesson to review the process.




//1)is an equation whose multiplied results will equal 62 >(31*2)
let num1=31;
let num2=2;

var multiply =(num1*num2);


//2) generates a random integer greater than 0
let number=60;
let randGen=Math.random()*number;//Random generator multiplied by the defined integer.
let ranInt=randGen;
var random =Math.round(ranInt);//Rounding off the results from the random number generated.

// console.log(random);


//3)is an equation that calculates a remainder that is equal to 4
let num3=59;
let num4=5;

var remainder=(num3%num4);//change the sign of division from / to %

var mod = remainder;
//Creating  a function to check the remainder.



// console.log(mod);







// 4) will return 20 as the highest number in the set

// let numberList=[5,10,15,20];
// let minNumber=Math.min(5,10,15,20);
let maxNumber=Math.max(5,10,15,20);
var max=maxNumber;
// console.log(max);

// var max=(Math.max(numberList));
// console.log(max);
