const Task = ({data, deleteTask, changeTaskStatus}) => {
    const  {text, date, important, finishDate, id, active} = data;


    if (active) {
        return (
            <div className='task'>
                <p className={important ? 'important' : null}>
                    <span className='task__description'>{text} - do <span>{date}</span></span>
                    <button className='btn__done' id={id} onClick={(event) => changeTaskStatus(event)}>
                        <i className="fas fa-check"></i>
                    </button>
                    <button className='btn__trash' id={id} onClick={(event) => deleteTask(event)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </p>
            </div>
        )
    } else {
        const normalisedFinishDate = new Date(finishDate).toLocaleString();
       return(
            <div className='task'>
                <p className='task__description'>
                    {text} (zrobić do: <span>{date}</span>)                   
                </p>
                <button className='btn__trash' id={id} onClick={(event) => deleteTask(event)}>
                    <i className="fas fa-trash"></i>
                </button> 
                <p className='task__whenDone'>
                    - zostało wykonane {normalisedFinishDate}
                </p>                          
            </div>
        ); 
    }
    

    
}
 
export default Task;