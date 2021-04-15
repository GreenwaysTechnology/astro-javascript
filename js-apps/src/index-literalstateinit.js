//state initalization; no constructors

var emp = {
    id: 1,
    name: 'subramanian',
    salary: 1000,
    calculateSalary: function () {
        return this.salary * 10;
    }
};

emp.name = 'karthik'
emp.salary = 9000;
console.log("Literal Object details")
console.log(`id ${emp.id}`)
console.log(`name ${emp.name}`)
console.log(`Salary ${emp.salary}`)
console.log(`Total Salary ${emp.calculateSalary()}`)


