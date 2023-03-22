//  let student={
//     name:"pooja",
//     age:23,
//     city:"pune",
//     company:"avalara"
//  }
//  for(let i in student){
//     console.log(student[i])
//  }

 let arr=["pooja","kirti","reeya"];
 for(let i of arr){
    if(i[0]=="p"){
        console.log(`this is right ${i}`);
    }
 }