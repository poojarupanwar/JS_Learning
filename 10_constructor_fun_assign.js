function Bank(bankName,accountNo,location,ifsc){
    this.bankName=bankName;
    this.accountNo=accountNo;
    this.location=location;
    this.ifsc=ifsc;
    this.show=function(){
        console.log(`Bank Name is: ${this.bankName}, Account Number: ${this.accountNo}, Bank Location is: ${this.location}, IFSC Code:${this.ifsc}`);
    }
}
Bank.prototype.opentime="9 AM IST";
Bank.prototype.closetime="6 PM IST";

console.log(`------------------------- create constructor function ------------------------------------`);
const yesBank=new Bank("Yes Bank","AC1234599","Pune","YES23459");
yesBank.show();
const sbiBank=new Bank("SBI Bank","AC1238755","Katraj","SBI7654");
sbiBank.show();
const mahBank=new Bank("Bank Of Maharashtra","AC1236190","Nigdi","MAHA98654");
mahBank.show();
const axisBank=new Bank("Axis Bank","AC1236789","Akurdi","AXIS23459");
axisBank.show();
console.log(`\n------------------- Add data member open time and close time  --------------------------`);
console.log(`Open time of SBI Bank : ${sbiBank.opentime}`);
console.log(`Close time of SBI Bank : ${sbiBank.closetime}`);

console.log(`------------------------------------------------------------`);

console.log(`Bank Name is ${axisBank.bankName} , Close Time is : ${axisBank.closetime}`);

console.log(`------------------------------------------------------------`);

console.log(`Bank Name is ${yesBank.bankName} , Branch code is : ${yesBank.ifsc}`);
