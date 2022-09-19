import React from "react";
import ACTIONS from "./App.js";

const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      {console.log(todo.id)}
      <span style={{ color: todo.complate ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, peyload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, peyload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
