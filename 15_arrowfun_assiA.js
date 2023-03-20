console.log(`-------------- Function with No argument and No return Value -----------------\n`);
 let noArgsNoReturn=()=>
    console.log(`Good Morning,Today is Monday`);

noArgsNoReturn();
console.log(`\n-------------- function with 3 argument and No return Value -----------------`);
let argsNoReturn=(num1,num2,num3=1)=>console.log(`Multiplication is: ${num1*num2*num3}`);

argsNoReturn(5,5,2);
argsNoReturn(10,4);

console.log(`\n-------------- function with 3 argument and No return Value -----------------`);

let add=(n1,n2,n3,n4,n5)=> n1+n2+n3+n4+n5;
     

let resNum=add(100,100,200,349,756);
console.log(`Addition is: ${resNum}`);

let resStr=add("I am ","learning ","ES6 ","features ","in depth");
console.log(resStr);
