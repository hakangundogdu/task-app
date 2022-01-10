import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterButton from './components/FilterButton';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

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
  const [filter, setFilter] = useState('All');

  const addTaskHandler = (task) => {
    if (task !== '') {
      setTaskList((prevTaskList) => {
        return [
          { task: task, completed: false, id: Math.random().toString() },
          ...prevTaskList,
        ];
      });
    }
  };

  const deleteTaskHandler = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const filteredList = taskList.filter(FILTER_MAP[filter]);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

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
            <p>{filteredList.length} tasks</p>
            <div className="filters">{filterList}</div>
          </div>
          <AddTask onAddTask={addTaskHandler} />
          <TaskList taskList={filteredList} onDeleteTask={deleteTaskHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
