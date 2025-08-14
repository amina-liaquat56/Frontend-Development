import React, { useReducer, useRef } from "react";

const initialTodos = [
  { id: 1, title: "Todo 1", complete: false },
  { id: 2, title: "Todo 2", complete: true },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

let nextTodoId = 3;
export default function UseReducerDemo() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const myref1 = useRef();

  const addNewTodo = (title) => {
    const actionObj = {
      type: "ADD",
      payload: {
        id: nextTodoId++,
        title: title,
        complete: false,
      },
    };
    dispatch(actionObj);
  };
  const handleComplete = (todo) => {
    dispatch({ type: "TOGGLE", id: todo.id });
  };
  const deleteTodo = (id) => {
    dispatch({ type: "DELETE", id: id });
  };
  return (
    <>
      <h3>Add ToDo</h3>
      <input ref={myref1} />
      <button onClick={() => addNewTodo(myref1.current.value)}>Add todo</button>
      <hr />
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            <span
              style={{
                textDecoration: todo.complete ? "line-through" : "none",
              }}
            >
              {todo.title}
              <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
            </span>
          </label>
        </div>
      ))}
    </>
  );
}
