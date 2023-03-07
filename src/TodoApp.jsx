import React, { useState } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const initialToDos = [];
  const [toDos, setToDos] = useState(initialToDos);
  const addTodo = (newTodoText) => {
    setToDos([...toDos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };
  const removeTodo = (todoId) => {
    // Filter out removed todo
    const updatedToDos = toDos.filter((todo) => todo.id !== todoId);
    // call setToDos with new toDos array
    setToDos(updatedToDos);
  };
  const toggleTodo = (todoId) => {
    const updatedToDos = toDos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setToDos(updatedToDos);
  };
const editTodo = (todoId, newTask) => {
    const updatedToDos = toDos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setToDos(updatedToDos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "whitesmoke",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Simple ToDo App</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            toDos={toDos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
