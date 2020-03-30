import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function TaskForm({ addTask }) {
  const [value, setValue] = useState("Add a task");
  const handleClick = event => {
    event.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  const handleChange = event => setValue(event.target.value);
  return (
    <form onSubmit={handleClick}>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
}
function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React" },
    { text: "Go out for dinner" },
    { text: "Read a book" }
  ]);

  const addTask = text => {
    //console.log(task);
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TaskForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
