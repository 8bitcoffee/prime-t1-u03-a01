console.log('JS loaded\n\n');

console.log("ARRAY SECTION:\n");
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
// console.table() logs out the data from an array with indices
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
// does not allow negative indices to call from the end of an array - returns undefined
let firstColor = colors[0];
let lastColor = colors[-1];
console.log(firstColor,lastColor);

// loops

// "for-of" loops
    // Loops over each item in an Array and assigns the value to 'item'.
console.log("\nFOR-OF LOOP:");
let colorList = document.querySelector('#color-list');
for(let item of colors) {
    // repeated for each item in the array
    console.log('color:', item);
    colorList.innerHTML += '<div>' + item + '</div>';
}

// Traditional "for" loop
console.log("\nTRADITIONAL FOR LOOP:")
let temperatureValues = [72,84,93,102];
// start, end, increment are the parameters
for(let index = 0; index < 4; index += 1){
    console.log(index);
}

// Loop over all temperature values
console.log("\nALL TEMP VALUES:");

for (let i = 0; i < temperatureValues.length; i += 1){
    let temp = temperatureValues[i];
    console.log('temp: ', temp);
}

// "while" loops (least common type)
console.log("\nWHILE LOOP:")
let start = 0;
while (start < 10) {
    console.log(start);
    start += 1; // increment
}