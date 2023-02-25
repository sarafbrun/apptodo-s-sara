

const filterByName = (pTasksList, pLetter) => pTasksList.filter(task => task.tittle.toLowerCase().includes(pLetter.toLowerCase()))



function deleteTask(pTasksList, pId) {
    let posicion = pTasksList.findIndex(task => task.idTask === pId);
    if (posicion !== -1) {
        pTasksList.splice(posicion, 1)
        return { status: true, msg: 'Tarea borrada' };
    }
    return { status: false, msg: 'No hay tarea que borrar' }
} 