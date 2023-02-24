console.log(`======== Arithmetic Operator ==========`);
var num1=10;
var num2=2;
var result=num1+num2;
console.log(`Addition is ${result}`);

result=num1-num2;
console.log(`Substraction is ${result}`);

result=num1*num2;
console.log(`Multiplication  is ${result}`);

result=num1**num2;
console.log(`Exponential is ${result}`);

result=num1/3;
console.log(`Division is ${result}`);

result=num1%num2;
console.log(`Remainder is ${result}`);

//compound addition.
var num=10;
num+=20;
console.log(num);
var num3=10;
console.log(num3==10);

console.log(`conversion operator :`);
var num3="10";
var num4=10;
console.log(num3==num4);

console.log(`strict equity operator :`);
console.log(num3===num4);


//ternerary operator
var age=20;
var res=age>=21?"congratulations":"better luck next time";
console.log(res);

var marks=70;
var result=marks>=65?"Allow for interview":"dont allow";
console.log(result);

console.log("Even or ODD");
var MyNum=7;
//even -divided by 2 and reminder is 0
var res=MyNum%2==0?"Even":"ODD";
console.log(`the number ${MyNum} is ${res}`);

//not a number
var fullName='hello';
var notNum=+fullName;
console.log(`It is not number${notNum}`);

//Explicit conversion: string to number using + operator
 var numInStr="100";
 console.log(typeof numInStr);
 var myNum=+numInStr;
 
 console.log(typeof myNum)


 //