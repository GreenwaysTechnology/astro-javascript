//

function Employee(id = 1, name = 'Subramanian', salary = 10000) {
    //object properties
    this.id = id // 1;
    this.name = name //'Subramanian';
    this.salary = salary //10000;
    //methods : via function
    this.calculateLeave = function (leave = 1) {
        return leave;
    }
}
var emp = null;
emp = new Employee()
console.log(`Id ${emp.id} name ${emp.name} Salary ${emp.salary} leave ${emp.calculateLeave(12)}`)
emp = new Employee(888, 'foo', 87666) //constructor parameters
console.log(`Id ${emp.id} name ${emp.name} Salary ${emp.salary} leave ${emp.calculateLeave(89)}`)
emp = new Employee(888, 'foo', 87666) //constructor parameters
emp.id = 1200
emp.name = 'bar';
console.log(`Id ${emp.id} name ${emp.name} Salary ${emp.salary} leave ${emp.calculateLeave(12)}`)
