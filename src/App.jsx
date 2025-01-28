import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [listTodo, setListTodo] = useState([]);

  const addList = (todo) => {
    setListTodo([...listTodo, { ...todo, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setListTodo(listTodo.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full flex flex-col items-center bg-[#1e1e1e] min-h-screen">
      <h1 className="text-4xl font-semibold text-white mt-6 mb-4">Todo App</h1>
      <TodoInput addList={addList} />
      <TodoList listTodo={listTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
