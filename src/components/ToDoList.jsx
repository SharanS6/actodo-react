import { useState } from "react"
import ToDoItem from "./ToDoItem"

function ToDoList(props) {

    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr


    return (
        <div className="bg-[#ac9eff] flex-grow border rounded-md p-2">
            <h1 className="text-2xl font-medium my-1">Today's Activity</h1>
           
            {
                activityArr.length===0?<p>You haven't add anything yet</p>:""
            }
           {
            activityArr.map( function(item,index)
            {
                return <ToDoItem item={item} index={index} activityArr={activityArr} setactivityArr={setactivityArr}/>
            })
           }
        </div>
    )
}
export default ToDoList