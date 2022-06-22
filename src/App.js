import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterButton from './components/FilterButton';
import { useTask } from './store/task-context';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const { getTasks, tasksList, createTask, updateTask, deleteTask } = useTask();

  const [filter, setFilter] = useState('All');

  const filteredList = tasksList
    .filter(FILTER_MAP[filter])
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  useEffect(() => {
    getTasks();
  }, []);

  console.log(tasksList);

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <header className="header">
            <h1 className="title">Task Manager</h1>
            <p className="text-gray">{new Date().toDateString()}</p>
          </header>
          <div className="tool-bar">
            <p>{filteredList.length} tasks</p>
            <div className="filters">{filterList}</div>
          </div>
          <AddTask createTask={createTask} />
          {filteredList.length > 0 ? (
            <TaskList
              taskList={filteredList}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ) : (
            <p className="no-task">Nothing Here</p>
          )}
        </div>
      </div>
      <section className="footer">
        by{' '}
        <a
          className="footer"
          rel="github"
          href="https://github.com/hakangundogdu"
          target="_blank"
          rel="noreferrer"
        >
          Hakan Gundogdu
        </a>
      </section>
    </div>
  );
}

export default App;
