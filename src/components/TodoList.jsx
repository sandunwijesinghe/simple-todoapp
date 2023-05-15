import React from "react";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";

function TodoList({
  todo,
  editValue,
  todoHandleChange,
  doneTodo,
  cancelEdit,
  editTodo,
  saveEditedValue,
  deleteTodo,
}) {
  return (
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

      <button className="ml-1">
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
  );
}

export default TodoList;
