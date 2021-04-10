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
//emp is reference variable,points the object location.
var emp = new Employee();
console.log(emp)
console.log(`Id ${emp.id} name ${emp.name} Salary ${emp.salary} leave ${emp.calculateLeave(12)}`)
console.log(`Id ${emp['id']} name ${emp['name']} Salary ${emp['salary']}`)
