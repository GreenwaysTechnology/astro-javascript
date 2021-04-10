//

function Employee(id = 0, name = '', salary = 0) {
    //object properties
    this.id = id // 1;
    this.name = name //'Subramanian';
    this.salary = salary //10000;
    //private variable
    var bonus = 2.5;
    //methods : via function
    this.calculateBonus = function () {
        return computeBonus();
    }
    this.calculateAnnualSalary = function () {
        return this.calculateBonus() + this.salary;
    }
    var tempSalary = this.salary;
    //private function
    // function computeBonus() {
    //     console.log(this.salary);
    //     return this.salary * bonus / 100
    // }
    function computeBonus() {
        return tempSalary * bonus / 100
    }
}
var emp = null;
emp = new Employee(1, 'Subramanian', 49500)
console.log(`Id ${emp.id} name ${emp.name} Salary ${emp.salary} Bonus ${emp.calculateBonus()} Annual salary ${emp.calculateAnnualSalary()}`)
