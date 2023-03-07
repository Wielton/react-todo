import React from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@mui/material";

// Can return three options:
// 1. a button to save when onClick
// 2. add an event listener with an Enter key on save
// 3.  or a form using onSubmit which will be a button or "enter" keypress
function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      style={{marginLeft: "1rem", width: "50%"}}
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        autoFocus
        fullWidth
      />
    </form>
  );
}

export default EditTodoForm;
