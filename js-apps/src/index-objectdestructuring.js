
//without object destructuring
// function printEmployee(employee) {
//     //print employee information
//     console.log(`Id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`Salary ${employee.salary}`)
// }
//with object destructuring
// function printEmployee(employee) {
//     //print employee information
//     //destructuring syntax
//     var { id, name, salary } = employee;
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`Salary ${salary}`)
// }

// function printEmployee({ id, name, salary }) {
//     //print employee information
//     //destructuring syntax
//     //    var { id, name, salary } = employee;
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`Salary ${salary}`)
// }
var printEmployee = ({ id, name, salary, address: { city } }) => {
    //print employee information
    //destructuring syntax
    //    var { id, name, salary,address:{city} } = employee;
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`Salary ${salary}`)
    // console.log(`City  ${address.city}`)
    console.log(`City  ${city}`)

};

var employee = {
    id: 1,
    name: 'subramanian',
    salary: 2000,
    address: {
        city: 'Coimbatore'
    }
};
printEmployee(employee);
