import React, { useState } from "react";

const TodoInput = ({ addList }) => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && imageUrl.trim()) {
      addList({ text, image: imageUrl });
      setText("");
      setImageUrl("");
    }
  };

  return (
    <div className="w-[90%] mt-6 p-4 flex flex-col gap-3 bg-[#2f2f2f] rounded-lg shadow-lg">
      <form className="w-full flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
        <input
          className="w-full sm:w-80 p-3 rounded-md border border-gray-600 bg-[#1a1a1a] text-white"
          type="text"
          placeholder="Enter task title"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input
          className="w-full sm:w-80 p-3 rounded-md border border-gray-600 bg-[#1a1a1a] text-white"
          type="url"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto h-12 bg-[#15141A] text-white rounded-lg px-4 hover:bg-[#202020] transition"
        >
          <i className="ri-add-fill"></i> Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
