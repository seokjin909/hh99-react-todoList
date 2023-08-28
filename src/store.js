import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./features/todo/toDoSlice";

export const store = configureStore({
  reducer: {
    toDos: toDoSlice,
  },
});
