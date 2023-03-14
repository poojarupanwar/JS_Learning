let arrayNums=[20,3,4,56,90,400,49];

console.log(`------------- Step 1 Original Array ----------------`);
console.log(arrayNums);

let cloneObj=arrayNums; //shadow clone
cloneObj.push(55);
cloneObj.push(66);
console.log(`------------- Original Array after push on cloned array ----------------`);
console.log(arrayNums);
console.log(`------------- Clone Array after push----------------`);
console.log(cloneObj);

let deepCloneArr={...arrayNums}; //deepclone using spread operator
arrayNums.push(10);
arrayNums.push(25);

