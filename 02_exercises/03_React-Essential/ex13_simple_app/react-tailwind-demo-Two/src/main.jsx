import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// for Quick fix id react not work use this import
// import { createRoot} from 'react-dom/client';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

/* 
  Target component tree (React)

  <App>
    <TaskForm />
    <TaskStats />
    <TaskList>
      <TaskItem />  (repeated for each task)
    </TaskList>
    <ClearCompletedButton />
  </App>


  Component tree (who renders whom)
  DOM mapping (what actually appears in the browser)

  DOM mapping (what the browser will show)
  React components produce DOM elements. For example, TaskList will render:

  a wrapper <div>
  for each task:
    a row <div> (or <li>)
    checkbox <input type="checkbox">
    task text <span>
    delete button <button>

  So you can think:

    “React component → JSX → DOM nodes”
*/