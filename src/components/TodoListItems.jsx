import React, { useState } from "react";

const TodoListItems = ({ todo, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full h-auto bg-[#313131] rounded-lg flex items-center gap-3 p-4 transform transition-transform duration-300 hover:scale-105">
      <img
        className="w-20 h-20 object-cover rounded-md"
        src={todo.image || "https://via.placeholder.com/150"}
        alt="Todo"
      />
      <span
        className={`flex-grow text-sm sm:text-base ${
          isChecked ? "line-through text-gray-400" : "text-white"
        }`}
      >
        {todo.text}
      </span>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="cursor-pointer"
      />
      <button
        onClick={() => onDelete(todo.id)}
        className="text-[#E1FCAA] hover:text-red-400 transition-all"
      >
        <i className="ri-delete-bin-7-line text-xl"></i>
      </button>
    </div>
  );
};

export default TodoListItems;
