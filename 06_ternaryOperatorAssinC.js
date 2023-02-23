//Use of Ternry operator and function expression

function expression(gradScore,hscScore,sscScore,candidateName){
var eligible=gradScore>=70 || hscScore>=80 || sscScore>=90 ? `Congrats ${candidateName} you are eligible for TCS interview` :`Unfortunately you are not eligible for the Interview`
}
expression()