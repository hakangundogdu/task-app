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
          <input
            className="add-task"
            placeholder="Add a New Task..."
            // value={enteredDepartment}
            // onChange={departmentChangeHandler}
          />

          <div>Task List</div>
        </div>
      </div>
    </div>
  );
}

export default App;
