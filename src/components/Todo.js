import React from "react";

function Todo({ todo, dispatch }) {
  return (
    <div>
      <li>{todo.name}</li>
      <button
        onClick={() => dispatch({ type: "toggle", payload: { id: todo.id } })}
      >
        {todo.completed === false ? "Complete" : "uncomplete"}
      </button>
      <button
        onClick={() => dispatch({ type: "delete", payload: { id: todo.id } })}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
