const TaskItem = (props) => {
  return (
    <div className="task-item">
      <input className="check-box" type="checkbox" checked={props.completed} />
      <p className="task-name">{props.task}</p>
    </div>
  );
};

export default TaskItem;
