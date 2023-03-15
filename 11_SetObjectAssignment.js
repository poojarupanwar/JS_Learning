class Bank{
    constructor(bankName,location,accountno,ifsc,interestrate){
        this.bankName=bankName;
        this.location=location;
        this.accountno=accountno;
        this.ifsc=ifsc;
        this.interestrate=interestrate;
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
console.log(`\n---------------- Create Set  -------------`);

let setObj=new Set();
setObj.add(axis_bank);
setObj.add(sbi_bank);
setObj.add(icic_bank);
setObj.add(kotak_bank);
setObj.add(hdfc_bank);
setObj.add(panjab_bank);
console.log(setObj);
console.log(`\n---------------- Traverse Set  -------------`);

for (const iterator of setObj) {
    if(setObj.has(iterator)){
        console.log("Bank Name :",iterator.bankName ,",Bank Location : " ,iterator.location)
    }
}