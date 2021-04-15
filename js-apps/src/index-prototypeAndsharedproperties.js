
function Employee(id = 0, name = "foo") {
    this.id = id;
    this.name = name;
    this.bouns = 999;
}

//get Prototype of employee
console.log(Employee.prototype)

//augment Prototype Object
Employee.prototype.salary = 900.00;
Employee.prototype.calculateBonus = function () {
    return this.bouns;
}
Employee.prototype.calculateSalary = function () {
    return this.salary * 100;
}
//create two instances
var emp1 = new Employee();
emp1.id = 1000;
emp1.name = "Subramanian"
console.log("employee 1 data")
console.log(`Id ${emp1.id}`);
console.log(`Name ${emp1.name}`);
console.log(`Salary ${emp1.salary}`);
console.log(`Bouns ${emp1.calculateBonus()}`);
console.log(`totalsalary ${emp1.calculateSalary()}`);



var emp2 = new Employee();
emp2.id = 22222;
emp2.name = "Ram"
console.log("employee 2 data")
console.log(`Id ${emp2.id}`);
console.log(`Name ${emp2.name}`);
console.log(`Salary ${emp2.salary}`);
console.log(`Bouns ${emp2.calculateBonus()}`);
console.log(`totalsalary ${emp2.calculateSalary()}`);
//