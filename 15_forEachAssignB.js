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

console.log("-------------- TCS Employee Details --------------");
arr_employess.forEach((employee)=>{
if(employee.emp_company=="TCS"){
    console.log(` Employee Name: ${employee.emp_name}, Employee Company: ${employee.emp_company}`);
}
})
console.log("\n-------------- Find the Employee greater than equal to 50000 --------------");

arr_employess.forEach((employee)=>{
    if(employee.emp_salary>=50000){
        console.log(`Employee id: ${employee.emp_id}, Employee Name: ${employee.emp_name},Employee Department: ${employee.emp_dept},Employee salary: ${employee.emp_salary}, Employee Company: ${employee.emp_company}`);
    }
    })
    
console.log("\n-------------- Employee Salary Total --------------");
let sum=0;
arr_employess.forEach((employee)=>{
    sum=sum+employee.emp_salary;
})
console.log(`Sum of All Employee Salary : ${sum}`);


console.log("\n-------------- Employee Salary Average --------------");
let avg=0;
arr_employess.forEach(()=>{
    avg=sum/arr_employess.length-1;
})
console.log(`Average Salary of Employee: ${avg}`);

console.log("\n--------------  IT Or HR department whose salary is greater than qual to 75000 --------------");
arr_employess.forEach((employee)=>{
if(employee.emp_dept=="IT" || employee.emp_dept=="HR" ){
    if(employee.emp_salary>=75000){
    console.log(`Employee id: ${employee.emp_id}, Employee Name: ${employee.emp_name} ,Employee Department: ${employee.emp_dept} ,Employee salary: ${employee.emp_salary} , Employee Company: ${employee.emp_company}`);
    }
   }
})