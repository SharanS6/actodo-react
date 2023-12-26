import AddToDo from "./AddTodo"
import ToDoList from "./ToDoList"
import { useState } from "react"
function TodoContainer() {

    const [activityArr, setactivityArr] = useState(
        [
           
        ]
    )
    return (
        <>

            <div className="flex justify-evenly gap-2 flex-wrap">
                <AddToDo activityArr={activityArr} setactivityArr={setactivityArr} />
                <ToDoList activityArr={activityArr} setactivityArr={setactivityArr} />

            </div>
        </>
    )
}

export default TodoContainer