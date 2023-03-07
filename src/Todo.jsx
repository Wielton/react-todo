import React from "react";
import useToggleState from "./hooks/UseToggleState";
import EditTodoForm from "./EditTodoForm";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{height: "64px"}}>
      {isEditing ? (
        <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <div>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteOutline />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditOutlined />
            </IconButton>
          </ListItemSecondaryAction>
        </div>
      )}
    </ListItem>
  );
}

export default Todo;
