import Task from './Task';

const TaskList = () => {
    return (
        <div className="task-list">
            <h2>Lista Tasków</h2>
            <ul>
                <Task />
                <Task />
                <Task />
            </ul>
        </div>
    );
}
 
export default TaskList;