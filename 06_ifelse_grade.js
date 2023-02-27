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
if(marks>=90)
{
    console.log(`Fantastic Marks : ${marks} ,Your grade is A+`)
}
if(marks>=90)
{
    console.log(`Fantastic Marks : ${marks} ,Your grade is A+`)
}
if(marks>=90)
{
    console.log(`Fantastic Marks : ${marks} ,Your grade is A+`)
}
if(marks>=90)
{
    console.log(`Fantastic Marks : ${marks} ,Your grade is A+`)
}
}
