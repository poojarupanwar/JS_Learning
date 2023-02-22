function squareOfWordLength(value){
   var lenVal=value.length*value.length;
console.log(`Given String is :${value}`);
console.log(`Total Length of string ${value} is ${value.length}`);
console.log(lenVal);
}
console.log("----------------------------Given String Length And its Square-------------------------------")

console.log("----------------------------   1  -------------------------------")

squareOfWordLength("JavaScript");
console.log("----------------------------   2  -------------------------------")
squareOfWordLength("Google Chrome");
console.log("----------------------------   3  -------------------------------")
squareOfWordLength("Developer Smart");

console.log("----------------------------Function with no return type and no return value-------------------------------")

function developer()
{
    var str="I am Angular Developer";
    var strLen=str.length;
    var totalWordsStr=str.split(" ");
    var totalWLen=totalWordsStr.length;
    console.log(`The String is:${str} ,Length of String is : ${strLen}`);
    console.log(`The Total Words of String are:${totalWordsStr} ,Length of total worlds is : ${totalWLen}`);
    console.log(`The result of string length divided by total number of words is :${strLen/totalWLen}`);
    console.log(`The result of string length multiplication by total number of words is:${strLen*totalWLen}`);
}
developer();