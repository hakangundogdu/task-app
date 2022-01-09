import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const DEMOTASKS = [
    {
      id: 1,
      task: 'React Native Course',
      completed: true,
    },

    {
      id: 2,
      task: 'React Project',
      completed: false,
    },

    {
      id: 3,
      task: 'Read the book',
      completed: false,
    },
  ];
  const [taskList, setTaskList] = useState(DEMOTASKS);

  const addTaskHandler = (task) => {
    setTaskList((prevTaskList) => {
      return [
        { task: task, completed: false, id: Math.random().toString() },
        ...prevTaskList,
      ];
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <header className="header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="title">Task Manager</h1>
            <p className="text-gray">{new Date().toDateString()}</p>
          </header>
          <div className="tool-bar">
            <p>{taskList.length} tasks</p>
            <div className="filters">
              <div className="filter is-active">All</div>
              <div className="filter">Active</div>
              <div className="filter">Completed</div>
            </div>
          </div>
          <AddTask onAddTask={addTaskHandler} />
          <TaskList taskList={taskList} />
        </div>
      </div>
    </div>
  );
}

export default App;
