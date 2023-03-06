const arraySeasonalFriuts=["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`Given Array:`);
console.log(arraySeasonalFriuts);
console.log(`\n----------------------- Step 1 -----------------------`);

console.log(`first element of an Array: ${arraySeasonalFriuts[0]}`);
console.log(`Last element of an Array: ${arraySeasonalFriuts[arraySeasonalFriuts.length-1]}`); 
console.log(`\n----------------------- Step 2 -----------------------`);
console.log(`Original Array: ${arraySeasonalFriuts}`);
arraySeasonalFriuts.unshift("Papaya");
console.log(`Array after insertion papaya at beggining :${arraySeasonalFriuts}`);

console.log(`\n----------------------- Step 3 -----------------------`);
console.log(`Original Array: ${arraySeasonalFriuts}`);

var removeEle=arraySeasonalFriuts.splice(4,1);
console.log(`Array after remove : ${arraySeasonalFriuts}`);
console.log(`element removed: ${removeEle}`);

console.log(`\n----------------------- Step 4 -----------------------`);

console.log(`Original Array: ${arraySeasonalFriuts}`);
arraySeasonalFriuts.push("Pineapple")
console.log(`Array after push: ${arraySeasonalFriuts}`);


console.log(`\n----------------------- Step 5 -----------------------`);

console.log(`Original Array: ${arraySeasonalFriuts}`);
arraySeasonalFriuts.splice(4,0,"Dragon Fruit")
console.log(`Array after push: ${arraySeasonalFriuts}`);


console.log(`\n----------------------- Step 6 -----------------------`);

console.log(`Original Array: ${arraySeasonalFriuts}`);
arraySeasonalFriuts.splice(2,2,"Kiwi")
console.log(`Array after Replace Orange: ${arraySeasonalFriuts}`);
console.log(`\n----------------------- Step 7 -----------------------`);
console.log(`Display elements from 1 to 4 index`);
console.log("Oroginal Array : "+ arraySeasonalFriuts);
var last4Elements=arraySeasonalFriuts.slice(1,5)
console.log(last4Elements)
console.log(`\n----------------------- Step 8 -----------------------`);
console.log(`Display last 3 elements`);
console.log(`Original Array`);

let elementLen=arraySeasonalFriuts.length-1;
var last3=arraySeasonalFriuts.slice(elementLen-3,elementLen);

console.log(arraySeasonalFriuts)
console.log(last3)
