console.log("---------------------------- step 1 -------------")
function voteEligibility(age){
if(age<0 || age==undefined || age>100){
   console.log(`This is not valid age : '${age}' please enter valid age`);
    }
else if(age>=18)
{
    console.log(`Your age is : '${age}' you are Eligible`);
}
else{
    console.log(`Your age is : '${age}' you are Not-Eligible`);
}
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility();
voteEligibility(null);

console.log("--------------------- step 2 -----------------");

function gradeCalulation(marks){
if(marks>=90)
{
    console.log(`Fantastic Marks : ${marks} ,Your grade is A+`)
}
else if(marks>=75)
{
    console.log(`Excellent Marks : ${marks} ,Your grade is A`)
}
else if(marks>=50 && marks<75)
{
    console.log(`Good Marks : ${marks} ,Your grade is B`)
}
else if(marks>=35 && marks<50)
{
    console.log(`Marks is : ${marks} ,Your grade is C ,Need Improvment`)
}
else if(marks<=0 || marks>100 || marks!=Number || marks===String)
{
    console.log(`Please provide valid marks -${marks}`)
}
}
gradeCalulation(98)
gradeCalulation(80)
gradeCalulation(90)
gradeCalulation(29)
gradeCalulation(150)
gradeCalulation(-7)
gradeCalulation(35)
gradeCalulation(29)
gradeCalulation(64)
gradeCalulation(49)
gradeCalulation("91")
gradeCalulation("Eighty")
gradeCalulation(NaN)
gradeCalulation(null)
