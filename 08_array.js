let arrayOfNumbers = [ 0, 2, 4, 5, 8, 4, 0, 7];
console.log(arrayOfNumbers); 

const totalArrayElements =  arrayOfNumbers.length;
console.log(`Total elements available in array is: ${totalArrayElements}`);
const is8Avail=arrayOfNumbers.includes(8);
console.log(`Is 8 available ${is8Avail}`);
const is9Avail=arrayOfNumbers.includes(9);
console.log(`Is 8 available ${is9Avail}`);

const indexOf8=arrayOfNumbers.indexOf(8);
console.log(`Index of 8 ${indexOf8}`);

const indexOf9=arrayOfNumbers.indexOf(9);
console.log(`Index of 9 ${indexOf9}`);

arrayOfNumbers[1]=50;
console.log(arrayOfNumbers);

var arrayOfNum = [ 10, 20, 25, 15, 30, 5];
console.log("==== Adding element in the last using push() === ");
arrayOfNum.push(40);
console.log(arrayOfNum);
console.log("==== Adding element in the first using unshift() === ");
arrayOfNum.unshift(5);
console.log(arrayOfNum);


var arrayOfNumRemove = [ 10, 20, 25, 15, 30, 5];
console.log("Original array :"+arrayOfNumRemove)
console.log("====  remove element in the last using pop() === ");
arrayOfNumRemove.pop();
console.log(arrayOfNumRemove);
console.log("==== Adding element in the first using shift() === ");
arrayOfNumRemove.shift();
console.log(arrayOfNumRemove);

//var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5, 40, 45];
console.log("==== slice(startIndex) === ");
const arrayFromIndex3 = arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);

console.log("==== slice(startIndex, endIndex) === ");
const subArray = arrayOfNumbers.slice(2, 5);
console.log(subArray);

console.log("============================");
 
console.log("==== splice(startIndex) === ");
const splicedArray = arrayOfNumbers.splice(3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumbers);
 
console.log("==== splice(startIndex, deleteCount) === ");
const splicedArrayWithDeleteCount = arrayOfNumbers.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumbers);
const spliceArray=arrayOfNumbers.splice(1,2);
console.log(arrayOfNumbers);

arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(3,1);
console.log(`After removing 15: ${arrayOfNumbers}`);

console.log("=====splice() to insert one elements without replacing existing element ====================");
arrayOfNumbers = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice( 2, 0, 22);
console.log(arrayOfNumbers);

console.log("=====splice() to insert one elements without replacing existing element ====================");
arrayOfNumbers = [ 10, 20, 25, 15, 40, 45,89];
// 5, 35, 55
arrayOfNumbers.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbers);