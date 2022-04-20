import React from "react";

function TodoItem({ id, text, completed, handleToggle, removeTodo }) {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleToggle(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
