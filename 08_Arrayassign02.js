const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`------------1.find the total length--------`)
console.log(`Given array: ${arrayNumbers}`);
console.log(`Total length: ${arrayNumbers.length}`);
console.log(`------------2.first and last element--------`)
console.log(`First element: ${arrayNumbers[0]}`);
console.log(`last element: ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`------------3. third last element--------`)
console.log(`third last element: ${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`------------4.  All even numbers --------`);
var evenArr=[];
for(let i=0;i<arrayNumbers.length;i++){
    if(arrayNumbers[i]%2==0){
        evenArr.push(arrayNumbers[i]);
    }
}
console.log(evenArr);
console.log(`\n------------5. All the odd numbers  --------`);
var oddArr=[];
for(let i=0;i<arrayNumbers.length;i++){
    if(arrayNumbers[i]%2!=0){
        oddArr.push(arrayNumbers[i]);
    }
}
console.log(oddArr);

console.log(`\n------------6.All Even Numbers and their sum --------`);
let evenPos=[];
var sum=0;
for(let i=0;i<arrayNumbers.length;i++){
    if(i%2==0){
        evenPos.push(arrayNumbers[i]);
        sum+=arrayNumbers[i];
    }

}
console.log(`Even position elements:  ${evenPos}  ,Sum=${sum}`);
console.log(`\n------------7.Sum of the odd position numbers --------`);
 let oddPos=[];
for(let i=0;i<arrayNumbers.length;i++){
    if(i%2!==0){
        oddPos.push(arrayNumbers[i]);
        sum+=arrayNumbers[i];
    }

}
console.log(`Odd position elements:  ${oddPos}  ,Sum=${sum}`);

console.log(`\n------------8.Sum of All numbers --------`);

var sum=0;
for(let i=0;i<arrayNumbers.length;i++){
           sum+=arrayNumbers[i];
   }
console.log(`Sum of all elements:${sum}`);


console.log(`\n------------9.numbers multiple of 5 --------`);
let mult=[];
for(let i=0;i<arrayNumbers.length;i++){
    if(arrayNumbers[i]%5==0){
        mult.push(arrayNumbers[i]);
}
}
console.log(mult)
console.log(`\n------------10. 155 Availabe in array or not --------`);
function availNum(n){
    let num=n;
        const search=arrayNumbers.indexOf(num);
        let available=search<0?"Number Not available":`Number available at postion:${search}`;
        console.log(num +" -"+available);
}

availNum(115);
console.log(`\n------------11. 23 Availabe in array or not --------`);
availNum(23);
 console.log(`\n------------12. Insert Element 55,66 before index 3 --------`);
console.log("Before insertion"+arrayNumbers) 
        
 arrayNumbers.splice(3,0,55,66);
 console.log(arrayNumbers);

 console.log(`\n------------13. Delete 3 Element starting from index 3 --------`);
 console.log(arrayNumbers);
 
 arrayNumbers.splice(4,3);
 console.log(arrayNumbers);
