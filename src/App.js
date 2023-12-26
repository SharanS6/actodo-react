
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ToDoListPage from "./components/ToDoListPage";

function App() {

  const [duser,dsetuser]=useState(
    [
        {
            user:"john",
            pw:123
        }
    ]
 )
  return(
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login duser={duser} dsetuser={dsetuser}/>} ></Route>
  <Route path="/SignUp" element={<SignUp duser={duser} dsetuser={dsetuser} />} />
  <Route path="/ToDoListPage" element={<ToDoListPage/>}></Route>
</Routes>
</BrowserRouter>
</div>
  )
  
}

export default App;
