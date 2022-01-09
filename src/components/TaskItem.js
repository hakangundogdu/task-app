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
        onClick={markDone}
      />
      <p className="task-name">{props.task}</p>
    </div>
  );
};

export default TaskItem;
