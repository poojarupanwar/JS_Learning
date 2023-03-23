const array=[3,4,5,90,50,1,44,78,51];
let sumOfArray=array.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
console.log(sumOfArray);

const arrayEven=array.filter((element)=>{
    return element%2==0
})
console.log(arrayEven);

let SumEven=arrayEven.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
console.log(SumEven);

const arrayNum=[3,4,12,8,90,50,1,15,78,21];
// Find the numbers which are multiple of 3 from the given array and sum it
console.log(" Find the numbers which are multiple of 3 from the given array and sum it");
const sumMultipleOf3 = arrayNum.filter( element => element%3==0)
.reduce( (runningTotal, value) => runningTotal + value);
console.log(sum);