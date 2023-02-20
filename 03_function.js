var num1 = 10;
var num2 = 20;

var str1 = 'pooja';
var str2 = 'kirti';

var name1 = 'c++';
var name2 = 'javaScript';

function swappingTwoArgs(val1, val2) {
    console.log("before swap:", val1, val2);
    var tmp = val1;
    val1 = val2;
    val2 = tmp;
    console.log("After swap:", val1, val2);
    return 'swapping variable successfully completed';
}
var result1 = swappingTwoArgs(num1, num2);
console.log(result1);
swappingTwoArgs(str1, str2);

//function with no arguments and no return value
function showFullName() {
    console.log("my Name is pooja madhukar rupanwar");
}
showFullName();

//function with args but no return value
function showAge(age) {
    console.log('My age is', age)
}
showAge(23);


//function with no argument and return value
function fullName() {
    var name = "pooja rupanwar";
    return name;
}
var fName = fullName()
console.log(fName);

//function eith arguments and return value
function sumOfNumbers(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;
}
var sumResult = sumOfNumbers(10, 45, 79.56);
console.log(sumResult);
