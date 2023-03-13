let student={
    firstname:"Pooja",
    lastname:"Rupanwar",
    isWorking:"yes",
    age:23,
    collageName:"Gsm collage",
    id:21,
    address:{
        street:"shivraj nagar",
        city:"Pune",
        PIN:"411017"
    },
    school:"kanya vidhyalaya pimpri",
    friends:["kirti","reeya","mansi"],

    show:function(){
        console.log("I am show() function");
    },
    addressDetails:function(){
        this.address;

    }
};
 
console.log(student.friends[1]);

