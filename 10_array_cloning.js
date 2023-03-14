const arrayOfNumber = [4, 5, 6, 7, 8, 3 ]
const newArray = arrayOfNumber; // Shallow Clone
newArray.push(100);
console.log(arrayOfNumber);
console.log(newArray);

const array = [5, 6, 3, 2, 1];
const clonedArray = [...array]
console.log("..... Merging an array.......");
const evenArray = [2, 4, 6, 8];
const mergedArray = array + evenArray
console.log(mergedArray);
console.log(typeof mergedArray);

// concat() method
const concatArray = array.concat(evenArray);
console.log(concatArray);
console.log(typeof concatArray);

// Spread Operator
const resultArray = [...array, ...evenArray];
console.log(resultArray);
console.log(typeof resultArray);