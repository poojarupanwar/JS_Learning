const array = [2, 3, 4, 5, 9];
// array.forEach( function( currentValue, index, array ) {
//     console.log(currentValue, index, array);
// });

array.forEach( ( currentValue ) => {
    console.log(currentValue);
});

console.log("forEach to find even number");
array.forEach(element => {
    if (element%2==0) {
        console.log(element);
    }
});

// console.log("forEach to find sum of number in array ");
// let sum=0;
// array.forEach(element => {
//      sum=sum+element;
// });
// console.log(sum);

// console.log("Even index array ");
// array.forEach( element,index => {
  
//         console.log(current,index);
    
// });

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monali", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("Find the employees whose name start with R....");
arrayEmployee.forEach(employee => {
    let empName = employee.emp_name;
    if (empName.startsWith("R")) {
        console.log(employee);
    }
});
console.log("Find the employees who work with infy display sarary.");
let TotalSal=0;
arrayEmployee.forEach(employee => {
    let empComp = employee.emp_company;
    if (empComp=="Infy") {
        TotalSal=TotalSal+employee.emp_salary
    }
});
console.log(TotalSal);

