import "./App.css";
import Navbar from "./component/Navbar";
function App() {
  const handleDelete=()=>{
   console.log("delete"); 
  }
  const handleEdit=()=>{
    console.log("edit");
  }
 const handleAdd=()=>{
  console.log("add");
 }
  return(
    <>
    <Navbar/>
    <div className="container mx-auto bg-gray-500 text-white p-4 rounded-md mt-4 min-h-[80vh]">
    <div className="addTodo">
      <h2>Add a todo</h2>
      <input className="bg-gray-400 w-70" type="text" placeholder="Add todo" />
      <button onClick={handleAdd} className="cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 text-amber-50 rounded-lg mx-2">Add</button>
    </div>
      <h1 className="text-xl font-bold">Your TODO</h1>
      <div className="todos">
        <div className="todo flex">
        <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing.</div>
        <button onClick={handleDelete} className="cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 text-amber-50 rounded-lg mx-1">delete</button>
        <button onClick={handleEdit} className="cursor-pointer bg-violet-800 hover:bg-violet-950 p-3 py-1 text-amber-50 rounded-lg mx-1">edit</button>
        </div>
        </div>    

    </div>
    </>
  )
  
}

export default App;
