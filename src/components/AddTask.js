import React, { useState } from 'react';

const AddTask = ({addTask}) => {
    
    const minDate = (new Date()).toJSON().slice(0, 10);
    const temp = minDate.split('-');
    temp[0] = Number(temp[0]) + 1;
    const maxDate = temp.join('-');

    const [taskText, setTaskText] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const [date, setDate] = useState(minDate);
    const [id, setId] = useState(0);


    const handleAddTaskText = (e) => {
        setTaskText(e.target.value)
    }

    const handleChangeIsImportant = () => {        
        setIsImportant(prev => !prev)
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if (!taskText) {
            alert('Wprowadź zadanie do wykonania');
            return;
        }
        
        addTask(taskText, isImportant, date, id);
        setTaskText('');
        setIsImportant('');
        setDate(minDate);
        setId(prev => prev + 1)
    }
    

    return (
        <div className="form">
            <form>
                <input 
                    type="text" 
                    placeholder='dodaj zadanie' 
                    value={taskText}
                    onChange={(e) => handleAddTaskText(e)}
                />                   
                <input 
                    type="checkbox" 
                    checked={isImportant}
                    onChange={handleChangeIsImportant}
                    id="important"
                />
                <label htmlFor="important">priorytet</label>
                <label htmlFor="dateToDo"></label>
                <input 
                    type="date" 
                    name="" 
                    id="dateToDo" 
                    min={minDate} 
                    max={maxDate}
                    value={date}
                    onChange={(e) => handleChangeDate(e)}
                />
                <button onClick={(e) => handleOnSubmit(e)}>Dodaj</button>            
            </form>
        </div>
    );
}
 
export default AddTask;