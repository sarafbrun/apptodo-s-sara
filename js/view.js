const sectionUl = document.querySelector('.liContainer')
const formAddtask = document.querySelector('#formtask');
const spanNumTasks = document.querySelector('#numtasks');
const search = document.querySelector('#search');
const button = document.querySelector('#button')
const empty = document.querySelector('.empty');

const arrayTasks = [];

function printTasks(pTasksList, pSection) {
    pSection.innerHTML = "";
    spanNumTasks.innerText = pTasksList.length;
    pTasksList.forEach(task => printOneTask(task, pSection));
}

function printOneTask(pTask, pSectionDom) {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    li.textContent = pTask.tittle;
    const button = document.createElement('button');
    button.textContent = 'X';
    button.dataset.id = pTask.idTask;
    button.classList.add('btn')

    button.addEventListener('click', removeTask)

    li.classList.add = pTask.priority;

    ul.appendChild(li);
    li.appendChild(button);

    pSectionDom.appendChild(ul)
}

printTasks(tasksList, sectionUl)

formAddtask.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    if (event.target.addtask.value !== "") {

        const newTask = {
            idTask: ID,
            tittle: event.target.addtask.value,
            priority: event.target.importance.value,
        }
        ID++;

        let task = tasksList.push(newTask);
        printOneTask(newTask, sectionUl);
    } else {
        alert('Debe rellenar el campo de la tarea')
    }
}

search.addEventListener('input', (e) => {
    let result = e.target.value;
    let listaFiltrada = filterByName(tasksList, result);
    printTasks(listaFiltrada, sectionUl)
})



function removeTask(event) {
    let idBorrar = parseInt(event.target.dataset.id);

    let result = deleteTask(tasksList, idBorrar)
    if (result.status) {
        event.target.parentNode.remove()
    } else {
        alert(result.msg)
    }
}

localStorage.setItem('TasksList1', JSON.stringify(arrayTasks));