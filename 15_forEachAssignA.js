const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log("------------ array element, index ----------------")
arrayNumbers.forEach((element,index)=>{
    console.log(`Index :${index} Element ${element}`)
})
console.log("------------ Positive Numbers ----------------")
let pos=[];
arrayNumbers.forEach((element,index)=>{
    if(element>0){
       pos.push(element)
    }
})
console.log(pos);

console.log("------------ Negative Numbers ----------------")
let negativeNums=[];
arrayNumbers.forEach((element,index)=>{
    if(element<0){
        negativeNums.push(element)
    }
})
console.log(negativeNums);

console.log("------------ Even Numbers ----------------")
let evenNo=[];
arrayNumbers.forEach((element)=>{
    if(element%2==0){
       evenNo.push(element)
    }
});
console.log(evenNo);

console.log("------------ Sum Of All Numbers ----------------")
let sum=0
arrayNumbers.forEach(element =>{
        sum=sum+element;
});
  console.log(sum);
  
  console.log("------------ Even Index Numbers ----------------")
  let evenNoIndex=[]
arrayNumbers.forEach((element,index)=>{
    if(index%2==0){
      evenNoIndex.push(element)
    }
});
console.log(evenNoIndex);