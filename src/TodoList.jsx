import React from "react";
import { Paper, List, Divider } from "@mui/material";
import Todo from "./Todo";

function TodoList({ toDos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {toDos.map((todo, i) => (
          <div>
            <Todo
              task={todo.task}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {i < toDos.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
