import React, { useState, useEffect } from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

import '../sass/App.scss'

const exampleTasks = [
  /* { id: 0, text: 'zagrać wreszcie w Wiedźmina 3', date: '2018-02-15', important: true, active: true, finishDate: null},
  { id: 1, text: "zrobić dobry uczynej", date: '2020-11-12', important: false, active: true, finishDate: null },
  { id: 2, text: "pomalować dom po sylwestrze", date: '2019-09-11', important: false, active: true, finishDate: null },
  { id: 3, text: "schudnąć 30 kilogramów", date: '2019-05-20', important: true, active: true, finishDate: null },
  { id: 4, text: "sprzedać butelki po piwie (20 skrzynek)", date: '2020-11-12', important: false, active: true, finishDate: null },
  { id: 5, text: "jeszcze raz pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
  { id: 6, text: "fryzjer!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
  { id: 7, text: "nie odbierać poleconego od komornika", date: '2020-11-12', important: false, active: true, finishDate: null },
  { id: 8, text: "kupić 2 butelki litrowe", date: '2019-09-11', important: false, active: true, finishDate: null }, */
]

const App = () => {

  const [tasks, setTasks] = useState(exampleTasks);

  useEffect(() => {
    document.title = `${(tasks.filter(task => task.active === true)).length}: tyle zadań do zrobienia`;
  }, [tasks])

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
    <div className='app'>
      <h1>Todo App</h1>
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