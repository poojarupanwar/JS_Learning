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

let arr_employess = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("--- Employee working in TCS----");
for (let i of arr_employess) {
    if (i.emp_company == "TCS") {
        console.log(`Employee Name : ${i.emp_name}, Company Name: ${i.emp_company}`);
    }
}
console.log("\n--- Employee Department Finance ----");

for (let i of arr_employess) {

    if (i.emp_dept == "Finance") {
        console.log(`Employee Department : ${i.emp_dept},Employee name : ${i.emp_name}`);
    }
}
console.log("\n--- Employee name starts with 'R' ----");

for (let i of arr_employess) {

    if (i.emp_name.startsWith("R")) {
        console.log(`Empolyee Id: ${i.emp_id} ,Empolyee Name: ${i.emp_name},Empolyee Department: ${i.emp_dept}, Empolyee salary: ${i.emp_salary} ,Empolyee Company: ${i.emp_company} `);
    }
}
console.log("\n--- Employee salary greater than 75000 ----");

for (let i of arr_employess) {

    if (i.emp_salary > 75000) {
        console.log(`Employee Name: ${i.emp_name}, Company : ${i.emp_company},Employee Salary : ${i.emp_salary}`);
    }

}

console.log("\n--- Employee salary >=50000 and department is IT ----");


for (let i of arr_employess) {

    if(i.emp_salary>=50000 && i.emp_dept=="IT"){
        console.log(`Empolyee Id: ${i.emp_id} ,Empolyee Name: ${i.emp_name},Empolyee Department: ${i.emp_dept}, Empolyee salary: ${i.emp_salary} ,Empolyee Company: ${i.emp_company} `);
    }

}

    console.log("\n--- Employee company 'Infy' ----");

for (let i of arr_employess) {

    if(i.emp_company=="Infy"){
        console.log(`Empolyee Id: ${i.emp_id} ,Empolyee Name: ${i.emp_name},Empolyee Department: ${i.emp_dept}, Empolyee salary: ${i.emp_salary} ,Empolyee Company: ${i.emp_company} `);
    }
}




    

    
