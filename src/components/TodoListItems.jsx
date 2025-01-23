import React, { useState } from "react";

const TodoListItems = ({ todo, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className="w-full bg-[#313131] rounded-lg flex items-center gap-2 p-3 transform transition-transform duration-300">
      {/* Checkbox */}
      <input
        className="appearance-none w-4 h-4 border-2 border-gray-500 rounded-md checked:bg-gray-500 checked:border-[#E1FCAA]"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      {/* Text with Conditional Line-through */}
      <span
        className={`flex-grow text-sm sm:text-base ${
          isChecked ? "line-through text-gray-300" : "text-white"
        }`}
      >
        {todo.text}
      </span>

      {/* Delete Button */}
      <button onClick={() => onDelete(todo.id)}>
        <i className="ri-delete-bin-7-line text-[#E1FCAA] text-xl hover:text-red-400 transition-all duration-300"></i>
      </button>
    </li>
  );
};

export default TodoListItems;
