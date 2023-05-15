import React, { useState } from "react";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
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
        <div className="todo-input  w-full flex flex-row h-9">
          <input
            value={inputValue}
            placeholder="Enter todo here..."
            type="text"
            className=" border w-full bg-gray-200 text-gray-800 text-center rounded-lg border-gray-700 "
            onChange={inputHandleChange}
          />
          <button className="ml-5 " onClick={addTodo}>
            <AddCircleIcon fontSize="large" color="primary" />
          </button>
        </div>
        {/* todo list */}
        <div className="todo-list  mt-6">
          {todoList?.map((todo) => (
            <div id={todo.id} className="flex flex-row h-8 mt-1">
              <p className="bg-green-100 px-2 rounded-md h-100%  mt-1 border-2 border-green-400 w-11/12 ">
                <span className={todo.isDone ? "line-through" : ""}>
                  {" "}
                  {todo.title}
                </span>
              </p>

              <button
                className="   ml-2 h-100%  "
                onClick={() => doneTodo(todo.id)}
              >
                {!todo.isDone ? (
                  <CheckBoxOutlinedIcon fontSize="large" color="secondary" />
                ) : (
                  <CheckBoxIcon fontSize="large" color="secondary" />
                )}
              </button>
              <button className=" px-1 ml-2 h-100%  ">
                <EditIcon fontSize="medium" color="action" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
