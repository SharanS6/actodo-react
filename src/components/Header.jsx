import { useLocation } from "react-router-dom"

function Header(){

    const data=useLocation()
    console.log()
    return(
    <>
    <h1 className="text-3xl font-medium">Hello {data.state.userName}!</h1>
    <p>I help you manage your activities :)</p>
    </>
    )
}
export default Header