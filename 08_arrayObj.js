//const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];

let student={
    firstName:"Pooja",
    lastName:"Rupanwar",
    isWorking:true,
    age:22,
    collageName:"GSMoze",
    id:1234,
    address:{
        street:"wakad",
        city:"pune",
        PIN:"12345"
    },
    school:"kanya vidyalaya",
    friends:["kirti","reeya"],
    show:function(){
        console.log("this is show functin");
    }
};
student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}

 student.show()
console.log(student.friends.length-1)
console.log(student);
console.log(typeof student);
student.lastName="pooja";

console.log(student);
student.lastName="rupanwar";
student.company="avalara";
console.log(student.company);
student.country="india"

console.log(student.address.city);
student.address.PIN="431205";
console.log(student);

