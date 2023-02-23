
console.log("--------------------- 1 --------------------------");
function greaterNumber(num1,num2){
    var res=num1>num2?`Between ${num1} and ${num2} number ${num1} is greater `:`Between ${num1} and ${num2} number ${num2} is greater`;
return res;
}
var val1=greaterNumber(10,-10);
console.log(val1);
var val2=greaterNumber(800,899);
console.log(val2);


console.log("--------------------- 2 --------------------------");

function isEvenOrOddNum(num){
    var res=num%2==0?`the Number ${num} is Even`:`the Number ${num} is Odd`;
    return res;
}
var val1=isEvenOrOddNum(29);
console.log(`${val1}`);
val1=isEvenOrOddNum(44);
console.log(`${val1}`);
val1=isEvenOrOddNum(0);
console.log(`${val1}`);
val1=isEvenOrOddNum(101);
console.log(`${val1}`);

console.log("--------------------- 3 --------------------------");

function wordLength(word){
    var Len= word.length;
    var res=Len%2==0?"Even":"Odd";
    console.log(`The word ${word} has ${res} length`);
 }
 wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");