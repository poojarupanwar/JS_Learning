const bankSbi={
    bankName:"YesBank",
    accountNo:"AC0091235",
    ifsc:"YES098485",
    branch:"Pune"
}
const bankLocation={
    street:"banner",
    city:"pune",
    pincode:411234
}
//display function
function traverseBank(bankobj){
    for(const key in bankobj){
        if(Object.hasOwnProperty.call(bankSbi,key)){
            const element=bankobj[key];
            console.log(`The ${key} is: ${element} `);
        }
    }
}
function traverseLoc(bankobj){
    for(const key in bankobj){
        if(Object.hasOwnProperty.call(bankLocation,key)){
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
traverseBank(objAssibank)
console.log(`------------------ Clone Object Bank Using spread operator -----------`);
traverseBank(spreadBank)


//clone 2nd obj using object.assign
let objAssibankLoc=Object.assign({},bankLocation);

// //clone 2nd obj using object.assign
let spreadbankLoc={...bankLocation};

//display them on console
 
console.log(`------------------ Clone Object Bank Using Object.assign -----------`);
traverseLoc(objAssibankLoc)
console.log(`------------------ Clone Object Bank Using spread operator -----------`);
traverseLoc(spreadbankLoc)