//Selectors

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//Event Listeners

todoButton.addEventListener('click', addTodo)

function addTodo(event){
    event.preventDefault();

    //Create DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add("todo")
    //Create LI
    const newToDo = document.createElement("li")
    newToDo.innerText = "Hey"
    newToDo.classList.add("todo-item")

    //CONCATINATE LI TO DIV
    todoDiv.append(newToDo)

    //CHECK MARK BUTTON
    const completedButton = document.createElement("button")
    completedButton.innerHTML = `<i class="fas fa-check>`
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)

    //DELETE BUTTON
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = `<i class="fas fa-trash>`
    deleteButton.classList.add("delete-btn")
    todoDiv.appendChild(deleteButton)
    
    //APPEND TO LIST
    todoList.appendChild(todoDiv)
    console.log(todoDiv)
}