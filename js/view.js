const sectionUl = document.querySelector('.liContainer')
const formAddtask = document.querySelector('#formtask');
const spanNumTasks = document.querySelector('#numtasks');
const search = document.querySelector('#search');
const button = document.querySelector('#button');
const selectPriority = document.querySelector('#selectPriority');
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
    const p = document.createElement('p')
    p.textContent = pTask.tittle;
    const button = document.createElement('button');
    button.textContent = 'X';
    button.dataset.id = pTask.idTask;
    button.classList.add('btn')

    button.addEventListener('click', removeTask)

    li.id = pTask.priority;

    ul.appendChild(li);
    li.appendChild(p);
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
        arrayTasks.push(newTask);
        //console.log(arrayTasks)
        localStorage.setItem('mistareas', JSON.stringify(arrayTasks))
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

selectPriority.addEventListener('change', (e) => {
    let priority = e.target.value;
    let listaFiltrada = filterByPriority(tasksList, priority);
    printTasks(listaFiltrada, sectionUl)
})









