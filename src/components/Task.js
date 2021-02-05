const Task = ({data, deleteTask, changeTaskStatus}) => {
    const  {text, date, important, finishDate} = data;

    return (
        <div>
            <p>
                {text} - do <span>{date}</span>
                <button onClick={() => changeTaskStatus()}>Zostało zrobione</button>
                <button onClick={() => deleteTask()}>X</button>
            </p>
            
        </div>
    );
}
 
export default Task;