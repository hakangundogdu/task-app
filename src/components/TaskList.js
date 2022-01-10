import TaskItem from './TaskItem';

const TaskList = (props) => {
  return (
    <div className="task-list-container">
      {props.taskList.map((item) => (
        <TaskItem
          id={item.id}
          key={item.id}
          task={item.task}
          completed={item.completed}
          onDeleteTask={props.onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
