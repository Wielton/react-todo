import React from "react";
import { Paper, List } from "@mui/material";
import Todo from "./Todo";

function TodoList({ toDos, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {toDos.map((todo) => (
          <Todo
            task={todo.task}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
