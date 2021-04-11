const newTask = document.querySelector('#delivery').addEventListener('submit', e => {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.text.value = ''
})