const tasks = [
    {title: 'morning task', body: 'learn data structures', completed: true},
    {title: 'afternoon task', body: 'build a website', completed: false},
    {title: 'evening task', body: 'make dinner', completed: false}
]

const findTask = ((tasks, taskTitle) => {
    return tasks.find((task, index) => {
        return task.title === taskTitle
    })
})

const getTasksToDo = ((tasks) => {
    return tasks.filter((task) => {
        return !task.completed
    })
})


const task = findTask(tasks, 'morning task')
const task2 = findTask(tasks, 'afternoon task')
const task3 = findTask(tasks, 'evening task')

console.log(task)
console.log(task2)
console.log(task3)

const getTasks = getTasksToDo(tasks)
console.log(getTasks)