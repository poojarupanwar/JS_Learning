const sbiBank={
    bankName:'sbiBank',
    location:'pune',
    accountNo:'AC5464312354',
    ifsc:'SBI098213',
    interestRate:12.4,
    showDetails:function(){
        console.log(`Bank Name is:${this.bankName} Location is:${this.location} IFSC No:${this.ifsc} Interest Rate:${this.interestRate}`);
}

};
const axisBank={
    bankName:'axisBank',
    location:'Kashmir',
    accountNo:'AC8769875463',
    ifsc:'AXIS098911',
    interestRate:11.2,
    showDetails:function(){
        console.log(`Bank Name is:${this.bankName} Location is:${this.location} IFSC No:${this.ifsc} Interest Rate:${this.interestRate}`);
}
};
const hdfcBank={
    bankName:'hdfcBank',
    location:'Solapur',
    accountNo:'AC8790075463',
    ifsc:'HDFC098988',
    RatinterestRate:10.2,
    showDetails:function(){
        console.log(`Bank Name is:${this.bankName} Location is:${this.location} IFSC No:${this.ifsc} Interest Rate:${this.interestRate}`);
}
}
const YesBank={
    bankName:'YesBank',
    location:'Bangalore',
    accountNo:'AC8769800003',
    ifsc:'YES098909',
    interestRate:11.3,
    showDetails:function(){
                console.log(`Bank Name is:${this.bankName} Location is:${this.location} IFSC No:${this.ifsc} Interest Rate:${this.interestRate}`);
    }
};
YesBank.showDetails();
console.log("-----------------------------------------------------------------");

axisBank.showDetails();
console.log("-----------------------------------------------------------------");

hdfcBank.showDetails();
console.log("-----------------------------------------------------------------");

sbiBank.showDetails();
console.log("-----------------------------------------------------------------");



