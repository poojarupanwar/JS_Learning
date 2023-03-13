const student = {
    firstName: "Elon",
    lastName: "Musk",
    age: 54
} 
const address = {
    country : "US",
    city : "Silicon Valley",
    PIN: "QA2345"
}

// First way 
const mergedObject = Object.assign({}, student, address);
console.table(mergedObject);

// Second way 
const newObject = {};
Object.assign(newObject, student, address);
console.table(newObject);

//  Third way
Object.assign(student, address);
console.table(student);

//  Fourth way
Object.assign(address, student);
console.table(address);

Object.freeze(student);
