const Task = ({data, deleteTask, changeTaskStatus}) => {
    const  {text, date, important, finishDate, id, active} = data;

    if (active) {
        return (
            <div className='task d-flex justify-content-between  w-100 bg-light my-3'>
                <div className="task-text">
                    <p className={(important ? 'important' : null)}>
                        {text} - do {date}                 
                    </p>
                </div>                
                <div className="task-buttons d-flex">
                    <button className="btn btn-outline-success" id={id} onClick={(event) => changeTaskStatus(event)}>
                        <i className="fas fa-check"></i>
                    </button>
                    <button className="btn btn-outline-danger" id={id} onClick={(event) => deleteTask(event)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        )
    } else {
        const normalisedFinishDate = new Date(finishDate).toLocaleString();
        return(
            <div className='task d-flex justify-content-between  w-100 bg-light my-3'>
                <div className="task-text">
                    <p>
                        {text}                                   
                    </p>
                    <p>
                        zostało wykonane: {normalisedFinishDate}
                    </p>                      
                </div> 
                <div className="task-buttons">          
                    <button className="btn btn-outline-danger" id={id} onClick={(event) => deleteTask(event)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>         
            </div>            
        ); 
    }
}
 
export default Task;