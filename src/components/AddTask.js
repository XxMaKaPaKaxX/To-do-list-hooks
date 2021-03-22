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
        <div className="form">
            <form>
                <div className="input-group my-3">
                    <input 
                        type="text" 
                        placeholder='dodaj zadanie' 
                        value={taskText}
                        onChange={(e) => handleAddTaskText(e)}
                        className="form-control"
                    />
                    <div className="input-group-text">
                        <input 
                            type="checkbox" 
                            checked={isImportant}
                            onChange={handleChangeIsImportant}
                            id="important"
                            className="form-check-input"                        
                        />
                        <label className="form-check-label mx-1" htmlFor="important">priorytet</label>
                    </div> 
                </div>
                  
                <div className="input-group my-3">
                    <input 
                        type="date" 
                        name="" 
                        id="dateToDo" 
                        min={minDate} 
                        max={maxDate}
                        value={date}
                        onChange={(e) => handleChangeDate(e)}
                        className="form-control text-center"
                    />

                    <div className="input-group-text">
                        <button className="btn  btn-outline-primary" onClick={(e) => handleOnSubmit(e)}>Dodaj</button>
                    </div>                                   
                </div>          
            </form>
        </div>
    );
}
 
export default AddTask;