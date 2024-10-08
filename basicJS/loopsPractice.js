const input = 'hello im whale';

const vowels = ['a', 'e', 'i', 'o', 'u'];

resultArray = [];

for (let i = 0; i < input.length; i++){
  for (let j = 0; j <= vowels.length; j++){
    if (input[i] == vowels[j]){
      if (input[i] === 'e' || input [i] === 'u'){
        resultArray.push(input[i]);
        resultArray.push(input[i]);
      }
      else
        resultArray.push(input[i]);
    }
  }
}
const resultString = resultArray.join('')
console.log(resultString.toUpperCase());