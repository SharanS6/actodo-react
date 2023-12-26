import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const navigate= useNavigate()
const duser=props.duser
const dsetuser=props.dsetuser
   
     const [nuser,nusetuser]=useState("")
     const [npw,nsetpw]=useState("")
     const [ruser,rsetuser]=useState(true)
function adduser(){

    var userfound =false
    duser.forEach( function(item)
    {
        if(item.user === nuser && item.pw == npw)
        {
            console.log("Login succesful")
            userfound=true
            navigate("/ToDoListPage",{state:{userName:nuser}})
        }
        
    })

    if(userfound==false)
    {
        rsetuser(false)
        console.log("Login Failed")
    }
}


    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1>Hey Hi</h1>

                {
                    ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-500">Please Sign Up Before you Login</p>
                }
                
                <div className="flex flex-col gap-2 my-2 ">
                    <input value={nuser} onChange={(e)=>{nusetuser(e.target.value)}} className="w-52 border-black border rounded-md p-1  bg-transparent" placeholder="UserName" type="text" />
                    <input value={npw} onChange={(e)=>{nsetpw(e.target.value)}} className="w-52 border-black border rounded-md p-1  bg-transparent" placeholder="Password" type="text" />
                </div>
                <button onClick={adduser} className="bg-[#8272DA] w-24  p-1  rounded-md">
                    Login 
                </button>
                <p>Don't have an account? <Link to={"/SignUp"} className="underline ">Sign Up</Link></p>
            </div>

        </div>



    )
}

export default Login