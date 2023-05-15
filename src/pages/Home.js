import React, { useState } from "react";

function Home() {
  const todos = [
    { id: 1, title: "do homework", isDone: false },
    { id: 2, title: "read bookd", isDone: false },
    { id: 3, title: "take shower", isDone: false },
  ];

  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(todos);

  const inputHandleChange = (e) => {
    setInputValue(e.target.value);

    console.log("inputval", inputValue);
  };
  const addTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      id: todoList.length + 1,
      title: inputValue,
      isDone: false,
    };

    setTodoList([...todoList, newTodo]);
    setInputValue("");
  };

  const doneTodo = (id) => {
    const updatedList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(updatedList);
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="mt-20 w-1/3">
        {" "}
        {/* title */}
        <h1 className="text-center text-4xl mb-7">Todo App</h1>
        {/* input text */}
        <div className="todo-input  flex flex-row h-9">
          <input
            value={inputValue}
            type="text"
            className=" border border-gray-700 w-4/5"
            onChange={inputHandleChange}
          />
          <button
            className="ml-5 w-24 border border-gray-700 bg-blue-200 "
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        {/* todo list */}
        <div className="todo-list  mt-6">
          {todoList?.map((todo) => (
            <div id={todo.id} className="flex flex-row h-auto mt-1">
              <p className="bg-green-100 px-2 py-1 border border-gray-300 w-11/12 ">
                <span className={todo.isDone ? "line-through" : ""}>
                  {" "}
                  {todo.title}
                </span>
              </p>
              <button
                className="bg-red-300 px-2   ml-2  "
                onClick={() => doneTodo(todo.id)}
              >
                {todo.isDone ? "Undone" : "Done"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
