//Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. 
//The function should return the sorted array.

//array.sort([compareFunction])//
//If a - b is negative, a comes before b.
//If a - b is positive, a comes after b.
//If a - b is 0, their positions remain unchanged.

//condition ? valueIfTrue : valueIfFalse

function alphaSort(arr) {
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    });
}

console.log(alphaSort(['a', 'v', 'd', 'b']));
console.log(alphaSort([2, 13, 4, 7]));