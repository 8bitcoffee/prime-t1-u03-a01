console.log('Hello world!');
// string
let firstName = 'J';
// number
let temperature = 100;
//boolean
let sunny = true;

// array - store a collection of things
// best practice is to use all the same data type
// data in an array is sorted
// zero indexed
    //           0       1       2
let colors = ['orange','teal','green'];
// .pop() removeds the last item in an array
colors.pop();
// console.table() logs out the data from an array with indecies
console.table(colors);
// .push() adds an item to the end of an array
colors.push('blue','pink');
console.table(colors);
// .unshift() adds an item to the beginning of an array
colors.unshift('purple');
console.table(colors);
// .shift() removes the beginning item of an array
// .shift() and .pop() both return the item removed as well
let firstColorRemoved = colors.shift();
console.table(colors);
console.log(firstColorRemoved);

// call index to access the data without removing it
// does not allow negative indecies to call from the end of an array - returns undefined
let firstColor = colors[0];
let lastColor = colors[-1];
console.log(firstColor,lastColor);