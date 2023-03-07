function factorialOfNum(n)
{
    let ans=1;
    if(n===null || n===undefined)  {
        console.log(`please enter valid number,You have entered- ${n}`);
        ans=null;
    }  
    else{
    for(let i=n-1;i>=1;i--){
        if(n==1 || n==0)
        {
          ans=n;
        }
         else {
                ans+=ans*i;
            }
    }
}
    return ans;
}
var res=factorialOfNum(5);
console.log(`factorial of 5 is ${res}`)
var res=factorialOfNum(3);
console.log(`factorial of 3 is ${res}`)
var res=factorialOfNum(null);
var res=factorialOfNum(8);
console.log(`factorial of 8 is ${res}`)
var res=factorialOfNum(undefined); 
var res=factorialOfNum(9);
console.log(`factorial of 9 is ${res}`)
var res=factorialOfNum(0);
console.log(`factorial of 0 is ${res}`)
