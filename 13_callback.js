function firstClass(){
    console.log("We can return function from another function");
    return function(){
        console.log("Inner function");
    }
    // return innerFunction;
}
const inner = firstClass();
inner();