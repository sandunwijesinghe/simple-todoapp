import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TodoList from "../components/TodoList";

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
    if(inputValue===""){return;}
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
            <TodoList
              todo={todo}
              editValue={editValue}
              todoHandleChange={todoHandleChange}
              doneTodo={doneTodo}
              cancelEdit={cancelEdit}
              editTodo={editTodo}
              saveEditedValue={saveEditedValue}
              deleteTodo={deleteTodo}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Home;
