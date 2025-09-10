import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // 🔹 Load from localStorage on first render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  // 🔹 Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add or Update todo
  const handleAddOrUpdate = () => {
    if (todo.trim() === "") return;

    if (editId) {
      setTodos(
        todos.map((item) =>
          item.id === editId ? { ...item, text: todo } : item
        )
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: uuidv4(), text: todo, isCompleted: false }]);
    }
    setTodo("");
  };

  // Delete todo
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // Edit todo
  const handleEdit = (id) => {
    const todoToEdit = todos.find((item) => item.id === id);
    setTodo(todoToEdit.text);
    setEditId(id);
  };

  // Toggle checkbox
  const handleCheckbox = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return (
    <div className="container mx-auto bg-gray-500 text-white p-4 rounded-md mt-4 min-h-[80vh]">
      <h2 className="text-lg font-semibold mb-2">
        {editId ? "Edit todo" : "Add a todo"}
      </h2>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="bg-gray-200 text-black p-2 rounded-md"
        type="text"
        placeholder="Write todo..."
      />
      <button
        onClick={handleAddOrUpdate}
        className="bg-violet-800 hover:bg-violet-950 text-white px-4 py-2 rounded-md ml-2"
      >
        {editId ? "Update" : "Add"}
      </button>

      <h1 className="text-xl font-bold mt-6">Your TODO</h1>
      <div className="mt-4">
        {todos.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-700 p-3 rounded-md my-2"
          >
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => handleCheckbox(item.id)}
            />
            <span
              className={`flex-1 ml-2 ${
                item.isCompleted ? "line-through text-gray-400" : ""
              }`}
            >
              {item.text}
            </span>
            <button
              onClick={() => handleEdit(item.id)}
              className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-1 rounded-md mx-1"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
