const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
let len=arrayRollNumbers.length;

console.log(`--------- Reverse Array ----------------`);
console.log(len);
let rev=((arr)=>{
    return arr.reverse();
});
console.log(rev(arrayRollNumbers));

console.log(`--------- Sorted Array (without using custom logic) ----------------`);

let sortArray=((arr)=>{
    return arr.sort();
});
console.log(sortArray(arrayRollNumbers));

console.log(`--------- Sorted Array ----------------`);
arrayRollNumbers.sort((a,b)=>{
       return a>b?1:-1;
    });
 console.log(arrayRollNumbers );
 
 console.log(`--------- Greatest Number from Array ----------------`);
 let Biggest=arrayRollNumbers[arrayRollNumbers.length-1];
 console.log(`biggest element ${Biggest}`)
 
 console.log(`--------- Smallest Number from Array ----------------`);
 let Smallest=arrayRollNumbers[0];
 console.log(`Smalest element ${Smallest}`)

 console.log(`--------- Remove Duplicate Number from Array ----------------`);
const NewArray=new Set(arrayRollNumbers);
console.log(NewArray);
 
