import React, { useState } from 'react';

const TaskItem = (props) => {
  const [isDone, setIsDone] = useState(props.completed);

  // const markDone = (props) => {
  //   setIsDone((v) => !v);
  // };

  return (
    <div className="task-item">
      <input
        className="check-box"
        type="checkbox"
        checked={props.completed}
        onChange={() => {
          props.updateTask(props.id, props.completed);
        }}
      />
      <p className={props.completed ? 'task-name-checked' : 'task-name'}>
        {props.task}
      </p>
      <button
        className="task-delete"
        onClick={() => {
          props.deleteTask(props.id);
        }}
      />
    </div>
  );
};

export default TaskItem;
