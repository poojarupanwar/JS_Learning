'use strict'
let myName="pooja";
console.log(myName);

const student={
    firstName:34,
    rollno:21,
    age:22
}
delete student.age;
console.log(student)

function show(arg1,...arg){
    console.log(arg1/0);
}
show(100,200,300)


