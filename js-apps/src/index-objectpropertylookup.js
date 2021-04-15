
function Employee(id = 0, name = "foo") {
    this.id = id;
    this.name = name;
    //this.salary =salary;
}
var emp = new Employee();

//
console.log(`Id ${emp.id}`);
console.log(`Name ${emp.name}`);
//?
//object augmentation: add property
emp.salary = 10000;
//object augmentation: update property
emp.name ="subramanian"

emp.department ="training";

console.log(`Name ${emp.name}`);
console.log(`Department ${emp.department}`);
console.log(`Salary ${emp.salary}`);
delete emp.department;
console.log(`Department ${emp.department}`);