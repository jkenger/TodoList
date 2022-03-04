//Selectors

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector(".filter-todo")
let todos = []

//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("change", filterTodo)
storageChecker()

//Functions
function addTodo(event){
    event.preventDefault();

    //Create DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add("todo")
    //Create LI
    const newToDo = document.createElement("li")
    newToDo.innerText = todoInput.value
    newToDo.classList.add("todo-item")

    //ADD TODO TO LOCAL STORAGE
    todoStorage(todoInput.value)
    //CONCATINATE LI TO DIV
    todoDiv.append(newToDo)

    //CHECK MARK BUTTON
    const completedButton = document.createElement("button")
    completedButton.innerHTML = "<i class='fas fa-check'></i>"
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)

    //DELETE BUTTON
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "<i class='fas fa-trash'></i>"
    deleteButton.classList.add("delete-btn")
    todoDiv.appendChild(deleteButton)
    
    //APPEND TO LIST
    todoList.appendChild(todoDiv)

    //CLEAR INPUT VALUE
    todoInput.value = ""
}

function deleteCheck(event){
    const item = event.target
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("fall")
        removeLocalTodos(todo)
        todo.addEventListener("transitionend", function(){
            todo.remove()
        })
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
        console.log(todo)
    }
}

function filterTodo(event){
    const todos = todoList.childNodes
    console.log(todos)
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    })
}

function getTodos(){
    storageChecker()
    todos.forEach(function(todo){
        //Create DIV
    const todoDiv = document.createElement('div')
    todoDiv.classList.add("todo")
    //Create LI
    const newToDo = document.createElement("li")
    newToDo.innerText = todo
    newToDo.classList.add("todo-item")

    //ADD TODO TO LOCAL STORAGE
    todoStorage(todoInput.value)
    //CONCATINATE LI TO DIV
    todoDiv.append(newToDo)

    //CHECK MARK BUTTON
    const completedButton = document.createElement("button")
    completedButton.innerHTML = "<i class='fas fa-check'></i>"
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)

    //DELETE BUTTON
    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "<i class='fas fa-trash'></i>"
    deleteButton.classList.add("delete-btn")
    todoDiv.appendChild(deleteButton)
    
    //APPEND TO LIST
    todoList.appendChild(todoDiv)
    })
}
function todoStorage(todo){
    storageChecker()
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function storageChecker(){
    todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"))
    todos;
    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = todosFromLocalStorage;
    }
    document.addEventListener("DOMContentLoaded", getTodos)
}

function removeLocalTodos(todo){
    let todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = todosFromLocalStorage;
    }
    const todoIndex = todos.indexOf(todo.children[0].innerText)
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem("todos", JSON.stringify(todos))
    
}
    
