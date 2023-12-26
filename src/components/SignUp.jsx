import { useState } from "react"
import { Link } from "react-router-dom"

function SignUp(props){

    
const duser=props.duser
const dsetuser=props.dsetuser

const [newuser,setnewuser]=useState("")
const [newpw,setnewpw]=useState("")
const [cnewpw,csetnewpw]=useState("")
const [check,setcheck]=useState(true)

function addnewuser(){

    if(newpw == cnewpw)
    {
        dsetuser([...duser,{ user:newuser,pw:newpw}])
        setnewuser("")
        setnewpw("")
        csetnewpw("")
        console.log("user added succesfully")
    }
    else
    {
        console.log("failed to add user")
        setcheck(false)
    }

}

    return(

        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1>Hey Hi</h1>
                {
                    check?<p>Sign Up :)</p>:<p className="text-red-500">Please Enter correct Password</p>
                }
                
                <div className="flex flex-col gap-2 my-2 ">
                    <input value={newuser} onChange={(e)=>{setnewuser(e.target.value)}} className="w-52 border-black border rounded-md p-1  bg-transparent" placeholder="UserName" type="text" />
                    <input value={newpw} onChange={(e)=>{setnewpw(e.target.value)}} className="w-52 border-black border rounded-md p-1  bg-transparent"  placeholder="Password" type="text" />
                    <input value={cnewpw} onChange={(e)=>{csetnewpw(e.target.value)}} className="w-52 border-black border rounded-md p-1  bg-transparent"  placeholder="Confrim Password" type="text" />
                </div>
                <button onClick={addnewuser} className="bg-[#FCA201] w-24  p-1  rounded-md">
                    Sign Up
                    </button>
                    <p>Already have an account? <Link to={"/"} className="underline ">Login</Link></p>
            </div>

        </div>
    )
}
export default SignUp