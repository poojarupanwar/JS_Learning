let arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
 let greaterThan50=arrayNumbers.filter((num)=>{
     return num>50
 })

console.log(`-------- Original Array  ---------`);
console.log(arrayNumbers)
console.log(`-------- Step1 Numbers greater than 50  ---------`);
console.log(greaterThan50);
console.log(`-------- Step2 Even Numbers  ---------`);
let even=[];
arrayNumbers.filter((num)=>{
  if(num%2==0) {even.push(num)}
})
console.log(even);

console.log(`-------- Step3 Odd Numbers  ---------`);
let odd=[];
arrayNumbers.filter((num)=>{
  if(num%2!=0) {odd.push(num)}
})
console.log(odd);

console.log(`-------- Step4  Numbers Multiple of 5  ---------`);
let MultOf5=[];
arrayNumbers.filter((num)=>{
  if(num%5==0) {MultOf5.push(num)}
})
console.log(MultOf5);