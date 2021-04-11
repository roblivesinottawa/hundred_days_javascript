const newParagraph = document.createElement('p')
newParagraph.textContent = 'this is a new element from javascript'
document.querySelector('body').appendChild(newParagraph)

const anotherParagraph = document.createElement('p')
anotherParagraph.textContent = 'this is just another paragraph from javascript'
document.querySelector('body').appendChild(anotherParagraph)


document.querySelector('button').addEventListener('click', e => {
    e.target.textContent = 'the button was clicked'
})
document.querySelector('#search-text').addEventListener('input', e => console.log(e.target.value))
document.querySelector('#my-id')