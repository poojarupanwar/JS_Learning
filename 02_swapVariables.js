console.log("******************** step 1 ************************");
var sweety="Sweety";
var cutie="Cutie";
console.log("Before swaping:",sweety," ",cutie);
var tmp;
tmp=sweety;
sweety=cutie;
cutie=tmp;
console.log("After swapping: ",sweety," ",cutie);

console.log("******************** step 2 ************************");
var num1=100;
var num2=200;
var num3=300;
console.log("Before swapping:",num1,num2,num3);

num1=num2;
num2=num3;
num3=num1;
console.log("After swapping:",num1,num2,num3);

var str1="pooja";
var str2="kirti";
var tmp=str1;
str1=str2;
str2=tmp;
console.log("string 1",str1,"string 2-",str2);

// function swappingTwoArgs(val1, val2) {
//     console.log("before swap:", val1, val2);
//     var tmp = val1;
//     val1 = val2;
//     val2=tmp;
//     console.log("After swap:", val1, val2);
// }
// swappingTwoArgs(num1,num2);
// swappingTwoArgs(str1,str2);
