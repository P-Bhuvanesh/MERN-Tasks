// Todo.js

import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="tasks-container">
        <div className="task-column">
          <h2>Active Tasks</h2>
          <ul>
            {activeTodos.map((todo, index) => (
              <li key={index} className="task-item">
                {todo.text}
                <div>
                  <button onClick={() => toggleCompletion(index)}>
                    Complete
                  </button>
                  <button onClick={() => removeTodo(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="task-column">
          <h2>Completed Tasks</h2>
          <ul>
            {completedTodos.map((todo, index) => (
              <li key={index} className="task-item completed">
                {todo.text}
                <div>
                  <button onClick={() => toggleCompletion(index)}>
                    Undo
                  </button>
                  <button onClick={() => removeTodo(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
