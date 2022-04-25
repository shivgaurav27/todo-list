import { useState, useReducer } from "react";
import uuid from 'react-uuid'


import './App.css';
import TaskInput from './components/TaksInput';
import TaskList from './components/TaskList';


function App() {

  // task list  
  const [taskinput, setTaskinput] = useState("")
  const [taskList, setTaskList] = useState([]);

  // conditional tasklist for buttons 
  const [conditionalList, setConditionalList] = useState([])
  const [showlist, setShowList] = useState(false)



  const handleSubmit = (e) => {
    e.preventDefault()
    const taskObj = { id: uuid(), name: taskinput, completed: false }

    setTaskinput("")
    setTaskList([...taskList, taskObj])
  }


  const handleDelete = (id) => {
    const updatedList = taskList?.filter(item => item.id !== id);
    const conditionalist = conditionalList?.filter(item => item.id !== id);

    setTaskList(updatedList)
    setConditionalList(conditionalist)
  }

  const handleTaskCheck = (isChecked, id) => {

    let updatedList = taskList?.map(item => {
      if (item?.id === id) {
        return {
          ...item,
          completed: isChecked,
        }
      }
      return item;
    });
    let conditionList = conditionalList?.map(item => {
      if (item?.id === id) {
        return {
          ...item,
          completed: isChecked,
        }
      }
      return item;
    });

    setTaskList(updatedList)
    setConditionalList(conditionList)
  }

  const show = (value) => {
    if (value === 'ALL') {
      setShowList(false)
    } else if (value === 'DONE') {
      setShowList(true)
      setConditionalList(taskList.filter(item => item.completed === true))
    } else if (value === 'NOT_DONE') {
      setShowList(true)
      setConditionalList(taskList?.filter(item => item.completed !== true))
    }
  }






  return (

    <div className="container">
      <div className="list-container">
        <h1>Todo List</h1>
        <hr className="hr-line" />
        <TaskInput
          handleSubmit={handleSubmit}
          taskinput={taskinput}
          setTaskinput={setTaskinput} />

        <TaskList
          taskList={showlist ? conditionalList : taskList}
          handleDelete={handleDelete}
          handleTaskCheck={handleTaskCheck}
          showFunc={show}

        />
      </div>
    </div>

  );
}

export default App;
