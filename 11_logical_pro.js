console.log(`---------  Fibonaci series ---------------`)
// 0  1  1   2   3   5   8

function fabSeries(fabTerm){
    let first = 0;
    let second = 1;
    let next = 0;
    for (let index = 1; index <= fabTerm; index++) {
     console.log(first);   
      next = first + second; 
      first = second;
      second = next;  
    }
}
fabSeries(7);

console.log(`---------  Factorial ---------------`)


console.log(`---------  Prime Nos ---------------`)

let n=20;
for(let i=1;i<=n;i++){
    
    if(n%i==0)
    {
        console.log(i+"it is not prime no")
    }
    else{
        console.log(i+ "it is prime no")
    }
}