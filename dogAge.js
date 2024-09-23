//tast//
/*Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for 
their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years 
in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?
Here’s how you convert your age from “human years” to “dog years”:
The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! 
With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.*/

const myAge = 31;
const myName = "Viktoriia";

//this is my first 2 yaers
let earlyYears = 2;
earlyYears *= 10.5;

//i need to calsulate the rest
const restYears = (myAge - 2) * 4;
const sum = earlyYears + restYears;

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${sum} years old in dog years.`);