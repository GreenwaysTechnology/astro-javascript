

var emp = {
    id: 1,
    name: 'subramanian',
    salary: 1000,
    calculateSalary: function () {
        return this.salary * 10;
    }
};
console.log("Literal Object details")
console.log(`id ${emp.id}`)
console.log(`name ${emp.name}`)
console.log(`Salary ${emp.salary}`)
console.log(`Total Salary ${emp.calculateSalary()}`)


