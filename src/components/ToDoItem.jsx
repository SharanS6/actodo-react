function ToDoItem(props) {
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    function deleteItem(removeid) {
        var temparr = activityArr.filter(function (item) {
            if (item.id === removeid)
                return false
            else
                return true
        })
        setactivityArr(temparr)
    }

    return (
        
        <p className="flex justify-between">{props.index + 1}.{props.item.activity}<button onClick={() => deleteItem(props.item.id)} className="text-red-600">Delete</button></p>
    )
}

export default ToDoItem