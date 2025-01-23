import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import MotivationTitle from "./components/MotivationTitle";
import TodoList from "./components/TodoList";

const App = () => {
  const [listTodo, setListTodo] = useState([
    {
      id: 1,
      text: "Just Do it",
    },
  ]);

  const addList = (text) => {
    setListTodo([{ id: crypto.randomUUID(), text: text }, ...listTodo]);
  };

  const deleteTodo = (id) => {
    setListTodo(listTodo.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full h-[100vh] bg-gray-400 flex justify-center items-start pt-10 md: h-auto:">
      <div className="w-[90%] max-w-[600px] h-auto pb-5 bg-[#15141A] rounded-3xl flex flex-col justify-start items-center sm:w-[95%] md:w-[80%]">
        <Navbar />
        <TodoInput addList={addList} />
        <MotivationTitle />
        <TodoList listTodo={listTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
