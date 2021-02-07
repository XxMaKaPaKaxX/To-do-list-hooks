import Task from './Task';

const TaskList = ({tasks, deleteTask, changeTaskStatus}) => {
    const allTasks = tasks;
    const activeTasks = allTasks.filter(task => task.active === true)
        .map(task => <Task key={task.id} data={task} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus}/>);

    const finishedTasks = allTasks.filter(task => task.active === false)
        .map(task => <Task key={task.id} data={task} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus}/>);

    return (
        <div className="taskList">
            <div className="taskList__active">
                <h2>Zadania do zrobienia: </h2>
                <ul>
                    {activeTasks}
                </ul>
            </div>
            <div className="taskList__finished">
                <h2>Zadania zrobione: </h2>
                <ul>
                    {finishedTasks}
                </ul>
            </div>
            
        </div>
    );
}
 
export default TaskList;