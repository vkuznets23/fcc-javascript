//.forEach applys function to each element of the array///

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// version one when u have a separate function
/*const iterationFruits = fruit => {
  console.log(`I want to eat a ${fruit}`);
}*/
fruits.forEach(fruit => console.log(fruit));


//.map it takes an argument of a callback function and returns a new array //
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(message => {
  return message[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => {
  return num / 100;
})

console.log(smallNumbers);

//.filter returns an array of elements after filtering out certain elements from the original array//
//method should return true or false depending on the element that is passed to it
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers2 = randomNumbers.filter(num => {
  return num < 250;
})
console.log(smallNumbers2);


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})
console.log(longFavoriteWords);