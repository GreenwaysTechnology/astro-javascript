//es 6 classes

class Employee {
    //instance variables
    // id = 0;
    // name = 'foo';
    constructor(id = 0, name = 'foo') {
        this.id = id
        this.name = name;
    }
    //methods
    calculateSalary() {
        return 100
    }
    calculateLeave = () => 10;
}
//create object
var emp = null;
emp = new Employee();
emp.id = 1;
emp.name = 'bar'
console.log(emp.id, emp.name, emp.calculateSalary(),emp.calculateLeave())

emp = new Employee(2, 'subramanian');
console.log(emp.id, emp.name, emp.calculateSalary(),emp.calculateLeave())