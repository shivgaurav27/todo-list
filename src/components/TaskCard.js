import React from 'react';
import './TaskCard.css'

function TaskCard({ task, handleDelete, handleTaskCheck }) {
  const { completed, name, id } = task;
  return (
    <div >
      <div key={task.id} className='card-container' >
        <input type="checkbox" name="checkBox" id="checkId" className='task-checked' checked={completed} onChange={(e) => handleTaskCheck(e.target.checked, id)} />
        <h2 className={`task-name ${completed ? '' : 'cross-text'}`}>{name}</h2>
        <button className='delete-task-btn' onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  )
}

export default TaskCard