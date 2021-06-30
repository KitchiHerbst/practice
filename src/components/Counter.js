import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter(props) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  return (
    <div>
      <span>
        <button onClick={decrementHandler}>-</button>
        <div>{state.count}</div>
        <button onClick={incrementHandler}>+</button>
      </span>
    </div>
  );
}

export default Counter;
