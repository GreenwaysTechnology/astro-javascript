
//find method.

var list = [1, 2, 3, 1, 4, 5];
var found = list.find(i => i == 1)
console.log(found)

var empList = [{
    id: 1,
    name: 'a'
},
{
    id: 2,
    name: 'b'
},
{
    id: 3,
    name: 'c'
}, {
    id: 4,
    name: 'd'
}
];

function findByid(id) {
    return empList.find(employee => {
        return id === employee.id
    });
}

var employee = findByid(1)
if (employee) {
    console.log(employee)
} else {
    console.log('No employee found!!')
}