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
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
const objArray=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]

console.log(`---------- Employee Working in TCS  -----------`)

let empTcs=objArray.filter((emp)=>{
   if(emp.emp_company=="TCS"){
        console.log(`Company : ${emp.emp_company} ,Employee Name ${emp.emp_name}`)
   }
})

 console.log(`---------- Average salary of Employee in Wipro -----------`)
let sum;
const sal=[]
let empSalWipro=objArray.filter((emp)=>{
    if(emp.emp_company=="Wipro")
   sal.push(emp.emp_salary);
})
let salAvg=sal.reduce((runningTotal,value)=>{
   sum=runningTotal+value;
     
    return sum;
})
console.log(salAvg/sal.length);
console.log(`---------- Average salary of Employee in Wipro and Infy-----------`)
let total=0;
const salary=[]
let empSalWiproInfy=objArray.filter((emp)=>{
    if(emp.emp_company=="Wipro" || emp.emp_company=="Infy")
   salary.push(emp.emp_salary);
})
let salAvgWiproInfy=salary.reduce((runningTotal,value)=>{
   total=runningTotal+value;
        return total;
})
console.log(salAvgWiproInfy/salary.length);
 


