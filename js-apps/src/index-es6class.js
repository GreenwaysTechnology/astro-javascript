//es 6 classes

class Employee {
    //instance variables
    id = 0;
    name = 'foo';
    //methods
    calculateSalary() {
        return 100
    }
}
//create object
var emp = new Employee();
console.log(emp.id,emp.name,emp.calculateSalary())