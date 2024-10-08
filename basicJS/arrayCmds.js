let secretMessage = [
    'Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily',
    'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you',
    'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'
];

// Remove the last element from the array
secretMessage.pop();

// Add 'to' and 'Program' to the end of the array
secretMessage.push('to', 'Program');

// Replace the 7th element (originally 'easily') with 'right'
secretMessage[secretMessage.indexOf('easily')] = 'right';

// Remove the first element of the array
secretMessage.shift(1);

// Add 'Programming' to the beginning of the array
secretMessage.unshift('Programming');

// Remove 5 elements starting from index 6 and replace them with 'know'
// This effectively removes 'easily', 'the', 'first', 'time,', 'it'
// and replaces them with 'know'
secretMessage.splice(secretMessage.indexOf('get'), 5, 'know');

// Join the elements of the array into a single string with spaces
console.log(secretMessage.join(' '));
