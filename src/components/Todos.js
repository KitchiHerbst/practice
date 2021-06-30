import React, { useReducer, useState } from "react";

import Todo from "./Todo";

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return { todos: [...state.todos, newTodo(action.payload.name)] };
    case "toggle":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "delete":
      return {
        todos: state.todos.filter((todo) =>
          todo.id === action.payload.id ? null : todo
        ),
      };
  }
}

const newTodo = (name) => {
  return { id: Date.now(), name: name, completed: false };
};

function Todos(props) {
  const [state, todoDispatch] = useReducer(todoReducer, { todos: [] });
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    todoDispatch({ type: "add", payload: { name: name } });
    setName("");
  };

  console.log(state.todos);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <ul>
        {state.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={todoDispatch} />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
