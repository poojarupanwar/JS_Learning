const professor={
    firstname:"Pooja",
    lastname:"Rupanwar",
    age:45,
    city:'pune',
    department:'computer',
    subject:'DM',
    degree:{
        engineering:'CSC',
        phd:'adv computer',
        HSC:'comp science',
        SSC:'General'
    },
     certificates:['hacker rank participation','Certification in IFE Course','IOT woprkshop participation','Webdeveleopment certificate of completion'],
    teacherDegree:function(){
        this.degree;
      console.log(`Total degrees: Engineering  : ${this.degree.engineering} ,PHD : ${this.degree.phd} ,HSC: ${this.degree.HSC} ,SSC  : ${this.degree.SSC} `);
    }
};

console.log("------------------- step 1 ------------------");
console.log(professor);
console.log("------------------- step 2 Nested object degree------------------");
//let degressDisplay=professor.teacherDegree();
console.log(professor.degree);
console.log("------------------- step 3 Add certificates------------------");
console.log(professor.certificates);
console.log("------------------- step 4 concat all degree ------------------");
professor.teacherDegree();
console.log("------------------- step 5 add new property ------------------");
professor.totalExperience="14 Years";
console.log(professor.totalExperience);
console.log("------------------- step 6 modify  existing property ------------------");
professor.age=22;
console.log(professor);
console.log("------------------- step 7 add property certificate at end ------------------");
professor.certificates[professor.certificates.length]="oracle certificate";
console.log(professor.certificates[professor.certificates.length-1]);