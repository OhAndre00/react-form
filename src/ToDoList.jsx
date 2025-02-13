import { useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addToDo() {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  }

  function removeToDo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function resetToDo() {
    setTodos([]);
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="font-bold text-xl text-center">To Do List</h1>
      <div className="flex gap-4">
        <input
          placeholder="Scrivi qualcosa..."
          className="w-50 border rounded-lg p-1"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="border rounded-xl p-2 bg-amber-200 hover:bg-amber-400"
          onClick={addToDo}
        >
          Add
        </button>
        <button
          className="border rounded-xl p-2 bg-amber-200 hover:bg-amber-400"
          onClick={resetToDo}
        >
          Reset
        </button>
      </div>
      <ul className="p-3 flex flex-col gap-4 justify-center items-center">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => removeToDo(index)}>
              <span className="border rounded-full p-1 text-red-500 hover:bg-red-200">
                X
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
