//Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. 
//The function should return the sorted array.

//array.sort([compareFunction])//
//If a - b is negative, a comes before b.
//If a - b is positive, a comes after b.
//If a - b is 0, their positions remain unchanged.

//condition ? valueIfTrue : valueIfFalse


//this one is fine for numbers
function alphaSortNum(arrNum) {
    return arrNum.sort((a, b) => (a - b));
}

//this is the same but with function
function alphaSortNum2(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

console.log(alphaSortNum([2, 13, 4, 7]));
console.log(alphaSortNum2([14, 2, 24, 17]));



// Sort numbers in ascending order (both nums and char)
function alphaSort(arr) {
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    });
}

// Sort numbers in descending order
function alphaSort(arr) {
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}

console.log(alphaSort(['a', 'v', 'd', 'b']));
console.log(alphaSort([2, 13, 4, 7]));