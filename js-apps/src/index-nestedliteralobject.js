//has-a ; nested object

var emp = {
    id: 1,
    name: 'subramanian',
    salary: 1000,
    address: {
        street: '10th',
        city: 'coimbatore',
        phone: {
            mobileno: '900897878'
        }
    },
    calculateSalary: function () {
        return this.salary * 10;
    }
};

console.log("Literal Object details")
console.log(`id ${emp.id}`)
console.log(`name ${emp.name}`)
console.log(`Salary ${emp.salary}`)
console.log(`Address ${emp.address.city} ${emp.address.phone.mobileno}`)
console.log(`Total Salary ${emp.calculateSalary()}`)


