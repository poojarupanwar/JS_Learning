let arrayNums=[20,3,4,56,90,400,49];

console.log(`------------- *** Step 1 *** ----------------`);
console.log(`-------------  Original Array ----------------`);
console.log(arrayNums);

let cloneObj=arrayNums; //shadow clone
cloneObj.push(55);
cloneObj.push(66);
console.log(`------------- Original Array after push on cloned array ----------------`);
console.log(arrayNums);
console.log(`------------- Clone Array after push----------------`);
console.log(cloneObj);


console.log(`\n------------- *** Step 2 *** ----------------`);

let deepCloneArr=[...arrayNums]; //deepclone using spread operator
arrayNums.push(10);
arrayNums.push(25);
console.log(`------------- Original Array after push ----------------`);
console.log(arrayNums);
console.log(`------------- deep Clone Array  ----------------`);
console.log(deepCloneArr);


console.log(`\n------------- *** Step 3 *** ----------------`);
const arrayEven=[2,30,14,8];
console.log(`Original array : ${arrayEven}`);
let mergedArr=[...arrayEven,...arrayNums]
console.log(`Merged array : ${mergedArr}`);

console.log(`\n------------- *** Step 5 *** ----------------`);


const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"60,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli ,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91- 9096 5678 77"]
}

console.log(`Employee Details :`);
console.log(`Address : ${employee_info.address.locality.colony} , ${employee_info.address.locality.street},  ${employee_info.address.city},  ${employee_info.address.state}  ${employee_info.address.country}`);
console.log(`Mobile Number ${employee_info.mobiles}`);

console.log(`\n------------- *** Step 6 *** ----------------`);
console.log(`Update property and deep clone using JSON.stringfy()`);

let newEmp=JSON.parse(JSON.stringify(employee_info));
 
newEmp.salary.july_month="80k";
console.log(`Updated Salary : ${newEmp.salary.july_month}`);
employee_info.address.country="United Kingdom";
console.log(` Country : ${employee_info.address.country}`);
