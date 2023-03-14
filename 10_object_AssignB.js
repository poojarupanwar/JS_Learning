const bankSbi={
    bankName:"SBIBank",
    accountNo:"AC0091235",
    ifsc:"SBI098485",
    branchCode:"SBI09"
}
const bankLocation={
    street:"banner",
    city:"pune",
    pincode:411234
}
//display function
function traverse(bankobj){
    for(const key in bankobj){
        if(Object.hasOwnProperty.call(bankobj,key)){
            const element=bankobj[key];
            console.log(`The ${key} is: ${element} `);
        }
    }
}
 
//clone 1st obj using object.assign
let objAssibank=Object.assign({}, bankSbi);
//clone 1st obj using spread operator
let spreadBank={...bankSbi};

//display them on console
console.log(`------------------ Clone Object Bank Using Object.assign -----------`);
traverse(objAssibank)
console.log(`------------------ Clone Object Bank Using spread operator -----------`);
traverse(spreadBank)


//clone 2nd obj using object.assign
let objAssibankLoc=Object.assign({},bankLocation);

// //clone 2nd obj using object.assign
let spreadbankLoc={...bankLocation};

//display them on console
 
console.log(`------------------ Clone Object Bank Using Object.assign -----------`);
traverse(objAssibankLoc);
console.log(`------------------ Clone Object Bank Using spread operator -----------`);
traverse(spreadbankLoc);

const rateOfInterest={
    homeLoanInterest:10.5,
    personalLoanInterest:12.5,
    dueInterest:15.2,
}
console.log(`------------------ Merge step1 ,step 2 and step 4 Objects into new Object-----------`);
const sbiDetails=Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(sbiDetails)
console.log(`------------------ Traverse using loop -----------`);
traverse(sbiDetails);

 