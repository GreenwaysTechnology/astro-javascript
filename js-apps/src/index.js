import { firstName, age, skills, sayHello } from './info'
import Todo from './Todo'

console.log(firstName, age, skills, sayHello())
let todo = new Todo()
console.log(todo.findAll())