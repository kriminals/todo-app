import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo, index, completeTask, deleteTask }) => {
return (<div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
{todo.text}
    <div>
      <button onClick={()=>completeTask(index)}>
        Complete
      </button>
      <button onClick={()=>deleteTask(index)}>
        Delete
      </button>
    </div>
</div>
)
}
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
    { text: "Learn React", isCompleted: false },
    { text: "Go out for dinner", isCompleted: false },
    { text: "Read a book", isCompleted: false }
  ]);

  const addTask = text => {
    //console.log(task);
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTask = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  const deleteTask = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
          key={index} 
          index={index} 
          todo={todo} 
          completeTask = {completeTask}
          deleteTask = {deleteTask}
          />
        ))}
        <TaskForm addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
