import TaskCard from "./TaskCard";
import './TaskList.css'

const TaskList = ({ taskList, handleDelete, handleTaskCheck, showFunc }) => {
    return (
        <div className="">
            <div className="button-container">
                <button className="list-btns" onClick={() => showFunc('ALL')}>All</button>
                <button className="list-btns" onClick={() => showFunc('DONE')}>DONE</button>
                <button className="list-btns" onClick={() => showFunc('NOT_DONE')}>NOT DONE</button>
            </div>
            <div className="">
                {
                    taskList?.map(task => {
                        return (
                            <TaskCard
                                key={task.id}
                                task={task}
                                handleDelete={handleDelete}
                                handleTaskCheck={handleTaskCheck}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TaskList;