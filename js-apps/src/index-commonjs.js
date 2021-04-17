// const result = require('./mylib')
// console.log(result);
// console.log(result.isValid())
const { isValid, firstName } = require('./mylib')
const EmployeeService = require('./Employee');
console.log(firstName);
console.log(isValid())
let emp = new EmployeeService();
console.log(emp.findAll());
