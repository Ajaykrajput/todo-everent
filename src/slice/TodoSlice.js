import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { title: "first todo", id: 1, coulmn: "todo" },
    { title: "2nd todo", id: 2, coulmn: "todo" },
    { title: "3rd todo", id: 3, coulmn: "todo" },
    { title: "4th todo", id: 4, coulmn: "todo" },

    { title: "5th todo", id: 5, coulmn: "progress" },
    { title: "6th todo", id: 6, coulmn: "progress" },
    { title: "7th todo", id: 7, coulmn: "progress" },
    { title: "8th todo", id: 8, coulmn: "progress" },

    { title: "9th todo", id: 9, coulmn: "completed" },
    { title: "10th todo", id: 10, coulmn: "completed" },
    { title: "11th todo", id: 11, coulmn: "completed" },
  ],
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    moveTodo: (state, action) => {
      const { id, targetColumn } = action.payload;
      const task = state.todos.find((todo) => todo.id === id);
      if (task) {
        task.coulmn = targetColumn;
      }
    },
  },
});

export const { moveTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
