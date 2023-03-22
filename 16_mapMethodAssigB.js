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

let empNamesArray=[];
console.log(`========== Map Method Assignment ==========`);
arr_employess.forEach((key)=>{
     empNamesArray.push(key.emp_name)
     });
     console.log(`-------------------- step 1 ------------------`);
console.log(`List of Employee Name: ${empNamesArray}`);

let depArray=[];
arr_employess.forEach((key)=>{
     depArray.push(key.emp_dept)
     });
     console.log(`-------------------- step 2 ------------------`);

console.log(`List of Employee department :${depArray}`);

let idArray=[];
arr_employess.forEach((key)=>{
     idArray.push(key.emp_id)
     });
     console.log(`-------------------- step 3 ------------------`);

console.log(`List of Employee ID :${idArray}`);

let tcsEmpArray=[];
arr_employess.forEach((key)=>{
    if(key.emp_company=="TCS"){}
     tcsEmpArray.push(key.emp_name)
     });
     console.log(`-------------------- step 4 ------------------`);

console.log(`List of Employee Working in TCS :${tcsEmpArray}`);
