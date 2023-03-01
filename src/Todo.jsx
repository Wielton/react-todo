import React from "react";
import useToggleState from "./hooks/UseToggleState";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

function Todo({ task, completed, id, removeTodo, toggleTodo }) {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem>
      {isEditing ? (
        <h1>Editing Time!</h1>
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
