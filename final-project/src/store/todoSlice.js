import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {},
    handleToggle(state, action) {},
  },
});

export const { addTodo, removeTodo, handleToggle } = todoSlice.actions;

export default todoSlice.reducer;
