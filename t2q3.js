function  updateEmployeeDetails(employee,...obj){

    employee.role=obj[0];
}
const employee={
    name:"deva",
    role:"ceo",
    age:20,
    location:"Hyderabad"
}
updateEmployeeDetails(employee,"manager")
console.log(employee)