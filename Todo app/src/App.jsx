import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, settodos] = useState([]);

  // ✅ Add todo
  const handleAdd = () => {
    if (todo.trim() === "") return; // prevent empty todos
    settodos([...todos, { todo, id: uuidv4(), isCompleted: false }]);
    setTodo("");
  };

  // ✅ Delete todo
  const handleDelete = (id) => {
    settodos(todos.filter((item) => item.id !== id));
  };

  // ✅ Edit todo (still just logs for now)
  const handleEdit = (id) => {
    console.log("edit", id);
  };

  // ✅ Track input
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // ✅ Toggle checkbox
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-gray-500 text-white p-4 rounded-md mt-4 min-h-[80vh]">
        <div className="addTodo mb-4">
          <h2 className="text-lg font-semibold mb-2">Add a todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            className="bg-gray-400 p-2 rounded-md text-black"
            type="text"
            placeholder="Add todo"
          />
          <button
            onClick={handleAdd}
            className="cursor-pointer bg-violet-800 hover:bg-violet-950 p-2 text-amber-50 rounded-lg mx-2"
          >
            Add
          </button>
        </div>

        <h1 className="text-xl font-bold mb-4">Your TODO</h1>
        <div className="todos">
          {todos.map((item) => (
            <div
              key={item.id}
              className="todo flex w-1/3 justify-between items-center my-2 bg-gray-700 p-3 rounded-md"
            >
              <input
                type="checkbox"
                name={item.id}
                onChange={handleCheckbox}
                checked={item.isCompleted}
              />
              <div
                className={`flex-1 mx-2 ${
                  item.isCompleted ? "line-through text-gray-400" : ""
                }`}
              >
                {item.todo}
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="cursor-pointer bg-red-600 hover:bg-red-800 p-2 text-white rounded-lg mx-1"
              >
                delete
              </button>
              <button
                onClick={() => handleEdit(item.id)}
                className="cursor-pointer bg-blue-600 hover:bg-blue-800 p-2 text-white rounded-lg mx-1"
              >
                edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
