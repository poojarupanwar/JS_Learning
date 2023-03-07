function factorialofWordsCounts(str){
    let newStr="";
    if(str==null|| str=="" ||str=="" || str==typeof Number){
        console.log(`please provide valid string , Your string is -'${str}'`)
    }
    else{
     for(let i=0;i<str.length;i++){
        if(str.charAt(i)==" "){
           continue;
        }
        else{
             newStr=newStr+str.charAt(i);
        }
          
        }
      console.log(newStr+" " +newStr.length);
    }
    
    }
    factorialofWordsCounts("Revision is the mother of Success");
    factorialofWordsCounts("We never fail, we always learn");
    factorialofWordsCounts(null);
    factorialofWordsCounts("");
    factorialofWordsCounts("Pooja Madhukar Rupanwar");
    