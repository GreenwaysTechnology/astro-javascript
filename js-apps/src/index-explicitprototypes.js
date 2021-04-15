//linking objects: inheritance;

//base class 
function Person(name = 'default') {
    console.log('Person is called')
    this.name = name;
}
Person.prototype.sayGreet = function () {
    return 'greet'
}
//child class
function Employee(name) {
    //calling super class constructor.
    Person.call(this,name); //binding base class and child class
    console.log('Employee is called')
}
//Linking Objects : establishing inheritance:
Employee.prototype = Object.create(Person.prototype);

var emp = new Employee("Subramanian");
console.log(emp.name);
console.log(emp.sayGreet())


var emp1 = new Employee();
console.log(emp1.name);
console.log(emp1.sayGreet())