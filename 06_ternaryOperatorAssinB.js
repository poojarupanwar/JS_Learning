console.log("-------------------------- step 1--------------------------------\n");
function maleMarriageEligibility(gender, age, boyName){
    var resMale = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for Marriage` : `${boyName} you are not eligible for Marriage`;
    return resMale;
 }
  var maleEligible = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(maleEligible);
  maleEligible = maleMarriageEligibility("Male", 17, "Stew Jobs");
  console.log(maleEligible);
  console.log("\n-------------------------- step 2--------------------------------\n");

  function femaleMarriageEligibility(gender, age, girlName){
    var resultFemale = (gender=="female" && age>=2) ? `Hey ${girlName} you are eligible for marriage` :  `${girlName} you are not eligible for Marriage` ;
    return resultFemale;
 }
  var femaleEligible = femaleMarriageEligibility("female", 16, "Jenifer");
  console.log(femaleEligible);
  femaleEligible = femaleMarriageEligibility("female", 27, "Malinda Gates");
  console.log(femaleEligible);


