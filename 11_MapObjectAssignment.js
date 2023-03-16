class Bank{
    constructor(bankName,location,accountno,ifsc,interestrate){
        this.bankName=bankName;
        this.location=location;
        this.accountno=accountno;
        this.ifsc=ifsc;
        this.interestRate=interestrate;
    }
}
let axis_bank=new Bank("Axis Bank","Pune","AC98770098","AXIS09808",12.3);
let sbi_bank=new Bank("SBI bank","Karnataka","AC98770888","AXIS09808",10.1);
let icic_bank=new Bank("ICIC Bank","Kerala","AC98770346","ICIC088565",10.3)
let kotak_bank=new Bank("Kotak Bank","Mumbai","AC98235686","KOTAK94747",11.2)
let hdfc_bank=new Bank("HDFC Bank","Bangalore","AC964246979","HDFC09865",11.2)
let panjab_bank=new Bank("Panjab Bank","Hydrabad","AC965355547","PANJAB09865",9.2)


console.log(`---------------- Create Bank class  -------------`);
console.log(axis_bank);
console.log(sbi_bank);
console.log(icic_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(panjab_bank);


// function traverse(obj){
//       for(let i in obj)
//     {
//       if(obj.hasOwnProperty){
//           console.log(`${i} :${obj[i]}`);
//       }
//     } 
//     }
//    traverse( axis_bank);
console.log(`\n---------------- Create Map  -------------`);

let bankSet=new Map();
bankSet.set("AC98770098",axis_bank);
bankSet.set("AC98770888",sbi_bank);
bankSet.set("AC98770346",icic_bank);
bankSet.set("AC98235686",kotak_bank);
bankSet.set("AC964246979",hdfc_bank);
bankSet.set("AC965355547",panjab_bank);
let keysMap=bankSet.keys();

for (let k of keysMap) {
    console.log(k,"=>", bankSet.get(k));
}
console.log(`\n---------------- Traverse Map  -------------`);

for ( let key of keysMap) {
       console.log("Bank Name :",bankSet.get(key).bankName,", Account No :",bankSet.get(key).accountno,", Interest Rate :",bankSet.get(key).interestRate);
       //console.log(keysMap);
}
 

 