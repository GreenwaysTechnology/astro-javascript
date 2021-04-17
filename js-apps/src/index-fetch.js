const { log } = console;

function findAllTodos() {
    const url = "https://jsonplaceholder.typicode.com/todos"
    return fetch(url);//promise
}
async function main() {
    // findAllTodos()
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(todos => log(todos))
    //     .catch(log)
    try {
        const response = await findAllTodos();
        const todos = await response.json();
        log(todos)
    }
    catch (err) {
        log(err)
    }
}
main();