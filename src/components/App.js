import React, { useState, useEffect } from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

import '../sass/App.scss';

const App = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    document.title = `${(tasks.filter(task => task.active === true)).length}: tyle zadań do zrobienia`;
  }, [tasks]);

  const addTask = (taskText, isImportant, date, id) => {
    const newTask = {
      id, 
      text: taskText, 
      date, 
      important: isImportant, 
      active: true, 
      finishDate: null
    }
    setTasks(prev => [...prev, newTask])
    
  }

  const deleteTask = (event) => {
   
    /* if (!window.confirm(`napewno chcesz usunąć zadanie?`)) {
      return
    } */
    const newTasks = tasks.filter(task => Number(event.currentTarget.id) !== task.id);
    setTasks(newTasks);
  };

  const changeTaskStatus = (event) => {
    const finishDate = (new Date()).getTime();    

    const newTasks = tasks.map((task) => {
      if (Number(event.currentTarget.id) === task.id) {
        task.active = !task.active;
        task.finishDate = finishDate;
      }
      return task;
    });
    
    setTasks(newTasks);
  }

  return (
    <div className="App container my-md-5">
      <h1 className="text-center m-3">To do list app</h1>
      <AddTask addTask={addTask}/>
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
      />
    </div>
  );
}
 
export default App;