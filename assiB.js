const sbiBank = {
    dataMembers: {
      bankName: "SBI Bank",
      location: "Pimpri",
      accountNo: 12121212,
      ifsc: "SBI000014",
      interestRate: "4.5%",
    },
    showDetails: function () {
      console.log(
        `Bank Name:${this.dataMembers.bankName}, location: ${this.dataMembers.location}, 
         Account No: ${this.dataMembers.accountNo}, IFSC: ${this.dataMembers.ifsc},
         Interest Rate: ${this.dataMembers.interestRate}`
      );
    },
  };
  
  const axisBank = {
    dataMembers: {
      bankName: "Axis Bank",
      location: "Pune",
      accountNo: 21212121,
      ifsc: "UTIB000020",
      interestRate: "5.5%",
    },
    showDetails: function () {
      console.log(
        `Bank Name:${this.dataMembers.bankName}, location: ${this.dataMembers.location}, 
         Account No: ${this.dataMembers.accountNo}, IFSC: ${this.dataMembers.ifsc},
         Interest Rate: ${this.dataMembers.interestRate}`
      );
    },
  };
  
  const hdfcBank = {
    dataMembers: {
      bankName: "HDFC Bank",
      location: "Kothrud",
      accountNo: 414245465,
      ifsc: "HDFC000025",
      interestRate: "6.5%",
    },
    showDetails: function () {
      console.log(
        `Bank Name:${this.dataMembers.bankName}, location: ${this.dataMembers.location}, 
         Account No: ${this.dataMembers.accountNo}, IFSC: ${this.dataMembers.ifsc},
         Interest Rate: ${this.dataMembers.interestRate}`
      );
    },
  };
  const yesBank = {
    dataMembers: {
      bankName: "YES Bank",
      location: "Chinchwad",
      accountNo: 145748565,
      ifsc: "YES000027",
      interestRate: "7.5%",
    },
    showDetails: function () {
      console.log(
        `Bank Name:${this.dataMembers.bankName}, location: ${this.dataMembers.location}, 
         Account No: ${this.dataMembers.accountNo}, IFSC: ${this.dataMembers.ifsc},
         Interest Rate: ${this.dataMembers.interestRate}`
      );
  
    }
  };
  console.log(`***********SBI Bank***************`);
  console.log(`Invoking showDetails() on SBI Bank:`)
    sbiBank.showDetails();
  
  console.log(`***********Axis Bank***************`);
  console.log(`Invoking showDetails() on Axis Bank:`);
    axisBank.showDetails();
  
  
  console.log(`***********HDFC Bank***************`);
  console.log(`Invoking showDetails() on HDFC Bank:`);
    hdfcBank.showDetails();
  
  
  console.log(`***********YES Bank***************`);
  console.log(`Invoking showDetails() on YES Bank:`);
    yesBank.showDetails();