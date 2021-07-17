import './App.js'
import './Assets/Styles.css'
import './App.css'


import { useState } from 'react';

import Header from './Components/Header'
import Task from './Components/Task'
import TaskEdit from './Components/TaskEdit'

function App() {
  const [task, setTask] = useState([
    {
      desc: "Learn React",
      id: 1,
      date: "2021-01-03",
      complete: false,
    },
    {
      desc: "Profit",
      id: 2,
      date: "2021-01-05",
      complete: false,
    },
  ]);

  const onTglStatus = (task) => {
    console.log("completing task");
    setTask(
      task.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    setTask([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...task,
    ]);
  };

  return (
    <div className="App">
      <Header></Header>

      <div className="container">
        <div className="col-12 text-right">
          <button
            className="button outline"
            onClick={() => setShowTaskEdit(!showTaskEdit)}>
            {!showTaskEdit && "New"}
            {showTaskEdit && "➖"}
          </button>
        </div>
        {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
        <Task task={task} onTglStatus={onTglStatus}></Task>
      </div>
    </div>
  );
}

export default App;
