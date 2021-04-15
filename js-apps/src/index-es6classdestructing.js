

class TodoService {
    constructor() {

    }
    findAll() {
        return 'findAll todos'
    }
    save() {
        return 'save todos'
    }
    remove() {
        return 'remove todos'
    }
    update() {
        return 'update todos'
    }
}
var todo = new TodoService();
console.log(todo.findAll(), todo.save(), todo.remove(), todo.update());

var { findAll, save, remove, update } = new TodoService();
console.log(findAll(), save(), remove(), update());

