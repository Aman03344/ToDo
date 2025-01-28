import React from "react";
import TodoListItems from "./TodoListItems";

const TodoList = ({ listTodo, deleteTodo }) => {
  return (
    <div className="mt-6 w-[90%] max-w-4xl mx-auto">
      <ul className="flex flex-col gap-4">
        {listTodo.map((todo) => (
          <TodoListItems key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
