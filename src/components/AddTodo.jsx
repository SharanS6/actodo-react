import { useState } from "react"

function AddToDo(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newActivity,addAcitivityList]=useState("")
    function addList(){
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        addAcitivityList("")
    }


    return (
        <div >
            <h1 className="text-2xl font-medium my-1 ">Manage Activities</h1>
            <input value={newActivity} onChange={(e)=>{addAcitivityList(e.target.value)}} className="border border-black mx-1 p-1" placeholder="New Activity?"></input>
            <button onClick={addList} className="border border-black bg-black text-white p-1">Add</button>
        </div>
    )
}
export default AddToDo