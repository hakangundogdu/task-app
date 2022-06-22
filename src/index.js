import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { TaskProvider } from './store/task-context';

ReactDOM.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
