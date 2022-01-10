import React, { useState } from 'react';

const TaskItem = (props) => {
  const [isDone, setIsDone] = useState(props.completed);

  const markDone = (props) => {
    setIsDone((v) => !v);
  };

  return (
    <div className="task-item">
      <input
        className="check-box"
        type="checkbox"
        checked={isDone}
        onChange={markDone}
      />
      <p className={isDone ? 'task-name-checked' : 'task-name'}>{props.task}</p>
      <button
        className="task-delete"
        onClick={() => {
          props.onDeleteTask(props.id);
        }}
      />
    </div>
  );
};

export default TaskItem;
