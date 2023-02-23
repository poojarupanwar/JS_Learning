function wordLength(word){
   var Len= word.length;
   var res=Len%2==0?"Even":"Odd";
   console.log(`The word ${word} has ${res} length`);
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");


// function wordLength(word){
//     var wordLength = word.length;
//     var result = wordLength%2==0 ? "EVEN" : "ODD";
//     return result;
//  }
//  var result = wordLength("JavaScript");
//  console.log(`Word "JavaScript" has ${result} length` );
//  // var result = wordLength("Google");
//  console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );

function maleMarriageEligibility(gender, age, boyName){
    var resMale = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return resMale;
 }
  var maleEligible = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(maleEligible);

  function femaleMarriageEligibility(gender, age, boyName){
    var resultFemale = (gender=="female" && age>=2) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return resultFemale;
 }
  var femaleEligible = femaleMarriageEligibility("female", 16, "Jenifer");
  var femaleEligible = femaleMarriageEligibility("female", 27, "Malinda Gates");
  console.log(femaleEligible);


