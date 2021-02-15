import React, { useState } from 'react';

import { getCalendaryFrame } from '../tools';

const AddTask = ({addTask}) => {

    const [minDate, maxDate] = getCalendaryFrame();

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
        <div className="add-task-form">
            <form>
                <input 
                    type="text" 
                    placeholder='dodaj zadanie...' 
                    value={taskText}
                    onChange={(e) => handleAddTaskText(e)}
                    className='task-text'
                />  
                <input 
                    type="date" 
                    name="" 
                    id="dateToDo" 
                    min={minDate} 
                    max={maxDate}
                    value={date}
                    onChange={(e) => handleChangeDate(e)}
                    className='task-date'

                />
                <div className='task-important'>
                    <input 
                    type="checkbox" 
                    checked={isImportant}
                    onChange={handleChangeIsImportant}
                    id="important"
                    />
                    <label htmlFor="important">
                        <i className="fas fa-bolt"></i>
                    </label>
                </div>             
                <button className='task-add-btn' onClick={(e) => handleOnSubmit(e)}>
                    <i className="fas fa-plus"></i>
                </button>            
            </form>
        </div>
    );
}
 
export default AddTask;