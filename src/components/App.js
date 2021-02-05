import React, { useState } from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';


const App = () => {
  return (
    <>
      Startujemy
      <AddTask />
      <TaskList />
    </>
  );
}
 
export default App;