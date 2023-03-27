class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");

const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]

console.log(`---------- Sort employees acording to Employee id in Ascending order  -----------`)
  arrayEmployees.sort((emp1,emp2)=>{
  return emp1.emp_id>emp2.emp_id?1:-1;
 })
  arrayEmployees.forEach((emp) => {
  console.log(`Employee ID : ${emp.emp_id} , Empoyee Name:${emp.emp_name}, Employee Department:${emp.emp_dept}`);
  
 });

console.log(`---------- Sort employees acording to Employee Department in Decending order -----------`)
 arrayEmployees.sort((emp1,emp2)=>{
  return emp1.emp_dept>emp2.emp_dept?1:-1;
 })
 arrayEmployees.forEach((emp) => {
  console.log(`Employee ID : ${emp.emp_id} , Empoyee Name:${emp.emp_name}, Employee Department: ${emp.emp_dept}`);
  
 });
 console.log(`---------- Sort employees acording to Employee Salary in Decending order -----------`)
 arrayEmployees.sort((emp1,emp2)=>{
  return emp1.emp_salary>emp2.emp_salary?-1:1;
 })
 arrayEmployees.forEach((emp) => {
  console.log(`Employee ID : ${emp.emp_name} , Empoyee Name:${emp.emp_salary}, Employee Department: ${emp.emp_company}`);
  
 });

 
