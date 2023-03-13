class Vehicle{
    name
    model
    type
    price
    color
    constructor(name,model,type,price,color){
        this.name=name;
        this.model=model;
        this.type=type;
        this.price=price;
        this.color=color;
    }
}
class Collage{
    name
    city
    id
    course
    
    constructor(name,city,id,course){
        this.name=name;
        this.city=city;
        this.id=id;
        this.course=course;
          }
    traverseObject()
    {
        console.log(`Collage Name:${this.name}`);
        console.log(`City :${this.city}`);
        console.log(`ID:${this.id}`);
        console.log(`Course Name:${this.course}\n`);
 
    }
}
const obj1=new Vehicle('TATA','Nexon','Petrol',870986,'Black');
 
const obj2=new Vehicle('Thar','SUV','Petrol',900567,'Red');
 
const obj3=new Vehicle('Tata Sumo','','Disel',800567,'Red');
 
const obj4=new Vehicle('BMW','Nexon','Petrol',870986,'White');
 
const obj5=new Vehicle('Maruti','Swift','Disel',890986,'Blue');

let arrayOfVehicles=[obj1,obj2,obj3,obj4,obj5];

console.log("------------------------- step 1 Using For in Loop --------------------------");

for(let key in arrayOfVehicles){
    console.log(arrayOfVehicles[key]);
}

console.log("\n------------------------- step 2 --------------------------");

const collage1=new Collage('GSM Collage','Pune',23,'BE');
const collage2=new Collage('Gpp Collage','Dhule',53,'BE');
const collage3=new Collage('DYP Collage','Latur',93,'BE');
const collage4=new Collage('SP Collage','Solapur',73,'BE');
 
collage1.traverseObject();
collage2.traverseObject();
collage3.traverseObject();
collage4.traverseObject();
console.log("\n------------------------- Prime number or Not --------------------------");

function isPrime(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
let res=isPrime(7);
console.log(`Number ${num} is ${res}`);