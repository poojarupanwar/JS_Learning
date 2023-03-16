console.log(myName);// Allowed to access
// console.log(age); // Not allowed to access 
var myName = "Virat Kohli";
let age = 33;

show();//  Allowed as it is normal functions are hoisted 

function show(){
    console.log("show() function");
}

// greet(); // Not allowed as it is FE and FE does not hoisted 
let greet = function(){
    console.log("Good Morning");
}
greet();