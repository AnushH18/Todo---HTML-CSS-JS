const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todoLane = document.querySelector('#todo-hold');
const rmBtn = document.querySelector('#todo-remove');

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const value = input.value;

    if(!value) return;
    const newTask = document.createElement("p");
    newTask.textContent = value;
    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");

    newTask.addEventListener("dragstart", ()=>{
        newTask.classList.add("is-dragging");
    })

    newTask.addEventListener("dragend", ()=>{
        newTask.classList.remove("is-dragging");
    })

    todoLane.appendChild(newTask);
    input.value = "";
})

rmBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const done = document.querySelector('#done');
    const toBeRemoved = done.querySelectorAll('.task');
    toBeRemoved.forEach((e)=>{
        done.removeChild(e);
    })
})