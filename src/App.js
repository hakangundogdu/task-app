import TaskList from './components/TaskList';

const taskList = [
  {
    id: 1,
    name: 'React Native Course',
    completed: true,
  },

  {
    id: 2,
    name: 'React Project',
    completed: false,
  },

  {
    id: 3,
    name: 'Read the book',
    completed: false,
  },
];
// import logo from './logo.svg';

function App() {
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
            <p>5 tasks</p>
            <div className="filters">
              <div className="filter is-active">All</div>
              <div className="filter">Active</div>
              <div className="filter">Completed</div>
            </div>
          </div>
          <input className="add-task" placeholder="Add a New Task..." />
          <TaskList taskList={taskList} />
        </div>
      </div>
    </div>
  );
}

export default App;
