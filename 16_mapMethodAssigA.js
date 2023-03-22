const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`--------Original array-------------`)
console.log(arrayNumbers)

let newArray = [];
arrayNumbers.forEach((key) => {

    newArray.push(key + 10)
});

console.log(`------------  Adding 10 to each element ----------------------`)
console.log(newArray)

console.log(`------------  square each array element ----------------------`)

let squareArray = [];
arrayNumbers.forEach((key) => {

    squareArray.push(key*key)
});

console.log(squareArray)


console.log(`------------ add index value into each array element value ----------------------`)

let indexAddArray = [];
arrayNumbers.forEach((key,value) => {

    indexAddArray.push(key+value)
});

console.log(indexAddArray)