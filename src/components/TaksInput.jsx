import "./TaskInput.css"

const TaskInput = (props) =>{
    const {handleSubmit , taskinput , setTaskinput}=props;

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input className="task-Input" type="text" name="taskinput" id="taskId" 
             placeholder="What do you want to do?"
             value={taskinput}
             onChange={(e)=>setTaskinput(e.target.value)} /> 
            <button className="add-task-btn" type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default TaskInput