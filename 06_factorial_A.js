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
    console.log(`factorial of ${n} is ${ans}`)
}
factorialOfNum(5);
factorialOfNum(3);
 factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);