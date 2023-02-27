function expression(gradScore,hscScore,sscScore,candidateName){
if(gradScore>=70 ||hscScore>=80 ||sscScore>90){
    console.log(`Congrats ${candidateName} you are eligible for Tcs interview.`);
}
else{
    console.log(`Unfortunetly you are not eligible for the interview`);
    }

}
expression(80,86,90,"Pooja");
expression(70,65,55,"kirti")
expression(60,79,88,"Reeya")