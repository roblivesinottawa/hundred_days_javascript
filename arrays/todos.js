const todos = [
    {todo: 'go grocery shopping', completed: true},
    {todo: 'feed the dog', completed: false},
    {todo: 'clean the house', completed: true},
]

const sortToDos = todos => {
    todos.sort((a, b) => {
        if (!a.completed && b.completed) {
            return - 1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}
sortToDos(todos)
console.log(todos)