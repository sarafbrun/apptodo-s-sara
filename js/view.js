const sectionUl = document.querySelector('.liContainer')
const formAddtask = document.querySelector('#formtask');
const spanNumTasks = document.querySelector('#numtasks');
const inputSearch = document.querySelector('#search')
const empty = document.querySelector('.empty');

function printTasks(pTasksList, pSection) {
    pSection.innerHTML = "";
    spanNumTasks.innerText = pTasksList.length;
    pTasksList.forEach(task => printOneTask(task, pSection));
}

function printOneTask(pTask, pSectionDom) {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    li.textContent = pTask.tittle;

    li.classList.add = pTask.priority;

    ul.appendChild(li);

    pSectionDom.appendChild(ul)
}

printTasks(tasksList, sectionUl)

formAddtask.addEventListener('submit', getDataTask);

function getDataTask(event) {
    event.preventDefault();

    if (event.target.addtask.value !== "") {
        const newTask = {
            tittle: event.target.addtask.value,
            priority: event.target.importance.value
        }

        let result = addTask(tasksList, newTask);
        if (result.status) {
            event.target.reset();
            printOneTask(newTask, sectionUl);
        } else {
            alert(result.msg)
        }
    } else {
        alert('El campo de la tarea no puede estar vacia')
    }
} 
