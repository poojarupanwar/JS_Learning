//Use of Ternry operator and function expression
console.log("\n--------------------------------------Use of Ternary operator and function expression----------------\n");
function expression(gradScore,hscScore,sscScore,candidateName){
var eligible=gradScore>=70 || hscScore>=80 || sscScore>=90 ? `Congrats ${candidateName} you are eligible for TCS interview` :`Unfortunately you are not eligible for the Interview`
console.log(eligible);
}
expression(80,86,90,"Pooja");
expression(70,65,55,"kirti");
expression(60,79,88,"Reeya");
