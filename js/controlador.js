function addTask(pTasksList, pTask) {
    let repeatedTask = pTasksList.some(task => task.tittle === pTask.tittle)
    if (!repeatedTask) {
        pTask.idTask = idTask;
        pTasksList.push(pTasksList);
        return { status: true, msg: "" }
    } else {
        return { status: false, msg: "La tarea no puede estar repetida" }
    }
}