const Task = ({data, deleteTask, changeTaskStatus}) => {
    const  {text, date, important, finishDate, id, active} = data;


    if (active) {
        return (
            <div className='task'>
                <p className={important ? 'important' : null}>
                    {text} - do <span>{date}</span>
                    <button id={id} onClick={(event) => changeTaskStatus(event)}>Zostało zrobione</button>
                    <button id={id} onClick={(event) => deleteTask(event)}>X</button>
                </p>
            </div>
        )
    } else {
        const normalisedFinishDate = new Date(finishDate).toLocaleString();
       return(
            <div className='task'>
                <p>
                    {text} (zrobić do: <span>{date}</span>)
                    <button id={id} onClick={(event) => deleteTask(event)}>X</button>
                </p>
                <p>
                    - zostało wykonane {normalisedFinishDate}
                </p>            
            </div>
        ); 
    }
    

    
}
 
export default Task;