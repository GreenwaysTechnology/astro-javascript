//

function Employee() {
    //object properties
    this.id = 1;
    this.name = 'Subramanian';
    this.salary = 10000;
    //methods : via function
    this.calculateLeave = function (leave = 1) {
        return leave;
    }


}
var emp = null;
console.log(typeof emp);
emp = new Employee()
console.log(`Id ${emp.id} name ${emp.name} Salary ${emp.salary} leave ${emp.calculateLeave(12)}`)
//state initalization
emp.id = 9000;
emp.name = 'Ram';
emp.salary = 88888;
console.log(`Id ${emp.id} name ${emp.name} Salary ${emp.salary} leave ${emp.calculateLeave(12)}`)
