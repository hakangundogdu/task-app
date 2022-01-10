import React, { useState } from 'react';

const AddTask = (props) => {
  const [enteredTask, setEnteredTask] = useState('');

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (!enteredTask.trim()) {
      return;
    }
    props.onAddTask(enteredTask);
    setEnteredTask('');
  };

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <form onSubmit={addTaskHandler}>
      <input
        className="add-task"
        type="text"
        placeholder="Add a New Task..."
        autoComplete="off"
        value={enteredTask}
        onChange={taskChangeHandler}
      />
    </form>
  );
};

export default AddTask;
