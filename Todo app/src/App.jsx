import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
function App() {

  const [todo, setTodo] = useState("")

  
  const [todos, settodos] = useState([])

  const handleDelete=()=>{
   console.log("delete"); 
  }
  const handleEdit=()=>{
    console.log("edit");
  }
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  const handleAdd=()=>{
    settodos([...todos,{todo, isCompleted:false}])
    setTodo("")
  }
  return(
    <>
    <Navbar/>
    <div className="container mx-auto bg-gray-500 text-white p-4 rounded-md mt-4 min-h-[80vh]">
    <div className="addTodo">
      <h2>Add a todo</h2>
      <input onChange={handleChange} value={todo} className="bg-gray-400 w-70" type="text" placeholder="Add todo" />
      <button onClick={handleAdd} className="cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 text-amber-50 rounded-lg mx-2">Add</button>
    </div>
      <h1 className="text-xl font-bold">Your TODO</h1>
      <div className="todos">
        {todos.map((item)=>{
         
        return  <div  className="todo flex w-1/3 justify-between items-center my-4 bg-gray-700 p-4 rounded-md">
         <div className="text">{item.todo}</div>
        <button onClick={handleDelete} className="cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 text-amber-50 rounded-lg ">delete</button>
        <button onClick={handleEdit} className="cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 text-amber-50 rounded-lg ">edit</button>
        </div>
        })}
        </div>    

    </div>
    </>
  )
  
}

export default App;
