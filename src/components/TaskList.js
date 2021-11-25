import TaskItem from './TaskItem';

const TaskList = (props) => {
  return (
    <div className="task-list-container">
      {props.taskList.map((item) => (
        <TaskItem key={item.id} task={item.task} completed={item.completed} />
      ))}
    </div>
  );
};

export default TaskList;
