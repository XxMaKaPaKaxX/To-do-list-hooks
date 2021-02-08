import Task from './Task';
import { sortTask } from '../tools';

const TaskList = ({tasks, deleteTask, changeTaskStatus}) => {
    const allTasks = tasks;
    const activeTasks = allTasks.filter(task => task.active === true)
        .map(task => <Task key={task.id} data={task} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus}/>);

    const finishedTasks = sortTask(allTasks.filter(task => task.active === false))
        .map(task => <Task key={task.id} data={task} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus}/>);    

    return (
        <div className="taskList">
            <div className="taskList__active">
                <h2>Zadania do zrobienia: {activeTasks.length}</h2>
                <ul>
                    {activeTasks}
                </ul>
            </div>
            <div className="taskList__finished">
                <h2>Zadania zrobione: {finishedTasks.length}</h2>
                <ul>
                    {finishedTasks}
                </ul>
            </div>
            
        </div>
    );
}
 
export default TaskList;