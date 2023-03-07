function factorialofWordsCounts(str){
    
    let ans=1;
    
    if(str==null|| str=="" ||str==" "|| str==typeof Number){
       return `Invalid string Please provide valid string , Your string is -'${str}'`;
         
    } 
    else{
        var newStr=str.split(" ");
        let n=newStr.length;
        for(let i=n-1;i>=1;i--){
            ans+=ans*i;
        }
         
    }
  
     return "Your string- "+str+" words="+newStr.length+" factorial ="+ans;
}
    
    
   var result= factorialofWordsCounts("Revision is the mother of Success");
   console.log(result);
   var result=factorialofWordsCounts("We never fail, we always learn");
   console.log(result);
   var result= factorialofWordsCounts(null);
   console.log(result);
   var result= factorialofWordsCounts("");
   console.log(result);
   var result=factorialofWordsCounts("Pooja Madhukar Rupanwar");
   console.log(result);

    