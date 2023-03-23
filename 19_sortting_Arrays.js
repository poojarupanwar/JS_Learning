const array=[2,5,8,998,654,7,98,1,61];
console.log(array);

let sorted=array.sort();
console.log(sorted);

const arrayOfNames = ["Elon", "Ratan", "Billgates","PT Usha", "Murmu"];
console.log(arrayOfNames);
console.log("========= After sorting=========");
const sortedArray = arrayOfNames.sort();
console.log(sortedArray); // Sorting in ascending order
sortedArray.reverse(); // Sorting in Descending order
console.log(sortedArray);

console.log("======= Sorting array of numbers =========");
const array1= [5, 6, 3, 44, 104, 302, 15];// 
console.log(array);
// Custom sorting to sort the elements in ascending order
array.sort( (a, b) => { // 3  6
    return a>b ? 1 : -1;
} );
console.log(array); // 
// Custom sorting to sort the elements in descending order
const arrayNum = [56, 3, 4, 78, 23, 32]
arrayNum.sort( (a, b) => { // 3  6
    return a>b ? -1 : 1;
} );
console.log(arrayNum);