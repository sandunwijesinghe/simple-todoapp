import React, { useState } from "react";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";

function Home() {
  const todos = [
    {
      id: 1,
      title: "do homework",
      isDone: false,
      isEdit: false,
      isSave: false,
    },
    { id: 2, title: "read books", isDone: false, isEdit: false, isSave: false },
    {
      id: 3,
      title: "take shower",
      isDone: false,
      isEdit: false,
      isSave: false,
    },
  ];

  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(todos);
  const [editValue, setEditValue] = useState("");
  //input while adding new todo
  const inputHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  //input while editing todo
  const todoHandleChange = (e) => {
    setEditValue(e.target.value);
  };

  //add todo list
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

  //mark todo done
  const doneTodo = (id) => {
    const updatedList = todoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(updatedList);
  };

  //delete todo
  const deleteTodo = (id) => {
    const updatedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedList);
  };

  //edit todo
  const editTodo = (id) => {
    const updatedList = todoList.map((todo) =>
      todo.id === id
        ? { ...todo, isEdit: !todo.isEdit, isSave: !todo.isSave }
        : todo
    );
    setTodoList(updatedList);
  };

  //cancel edit
  const cancelEdit = (id) => {
    const updatedList = todoList.map((todo) =>
      todo.id === id
        ? { ...todo, isEdit: !todo.isEdit, isSave: !todo.isSave }
        : todo
    );
    setTodoList(updatedList);
  };

  //save edited value
  const saveEditedValue = (id) => {
    const updatedList = todoList.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            title: editValue,
            isEdit: !todo.isEdit,
            isSave: !todo.isSave,
          }
        : todo
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
            className=" border w-full bg-blue-100 text-gray-800 text-center rounded-lg border-blue-600 "
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
              <div className="flex flex-col  w-full">
                {" "}
                {!todo.isEdit ? (
                  <p className="bg-green-100 px-2 rounded-md h-100%  mt-1 border-2 border-green-400 w-full ">
                    <span className={todo.isDone ? "line-through" : ""}>
                      {" "}
                      {todo.title}
                    </span>
                  </p>
                ) : (
                  <input
                    type="text"
                    className="bg-green-100 px-2 rounded-md h-100%  mt-1 border-2 border-green-400 w-full "
                    autoFocus="true"
                    value={editValue}
                    onChange={todoHandleChange}
                  />
                )}
              </div>
              <button
                className="   ml-2  "
                onClick={() => doneTodo(todo.id)}
                disabled={todo.isEdit}
              >
                {!todo.isDone ? (
                  <CheckBoxOutlinedIcon
                    fontSize="medium"
                    color={todo.isEdit ? "disabled" : "secondary"}
                  />
                ) : (
                  <CheckBoxIcon
                    fontSize="medium"
                    color={todo.isEdit ? "disabled" : "secondary"}
                  />
                )}
              </button>

              <button className="  ml-1  ">
                {todo.isEdit ? (
                  <CancelIcon
                    fontSize="medium"
                    color="action"
                    onClick={() => cancelEdit(todo.id)}
                  />
                ) : (
                  <EditIcon
                    fontSize="medium"
                    color="action"
                    onClick={() => editTodo(todo.id)}
                  />
                )}
              </button>

              <button className="  ml-1 ">
                {todo.isSave && (
                  <SaveIcon
                    fontSize="medium"
                    color="action"
                    onClick={() => saveEditedValue(todo.id)}
                  />
                )}
              </button>
              <button className="  ml-1 ">
                <DeleteIcon
                  fontSize="medium"
                  color="error"
                  onClick={() => deleteTodo(todo.id)}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
