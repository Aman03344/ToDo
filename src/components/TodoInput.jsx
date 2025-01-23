import React, { useState } from "react";

const TodoInput = ({addList}) => {
  const [text ,setText] =useState('')

  const handle = (e)=>{
    e.preventDefault()
    addList(text)
    setText('')
  }
  
  return (
    <div className="w-[90%] mt-6 p-2 flex flex-wrap gap-3 bg-[#E1FCAA] rounded-lg">
     <form className="w-full" onSubmit={(e)=> handle(e)} >
     <input
      onChange={(e)=> setText(e.target.value)}
      value={text}
      className="flex-grow pl-3 bg-transparent text-lg outline-none w-[90%]"
      type="text"
      placeholder="Enter to do..." required
    />
    <button 
    onClick={()=>addList}
     className="w-full sm:w-auto h-12 bg-[#15141A] text-white rounded-lg px-4   md:mt-0 sm: mt-3">
      <i className="ri-add-fill "></i>
    </button>
     </form>
    </div>
  );
};

export default TodoInput;
