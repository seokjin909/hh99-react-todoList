import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [
    {
      id: 0, // id는 모두 고유값이어야 합니다.
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: 1, // id는 모두 고유값이어야 합니다.
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      isDone: false,
    },
  ],
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        isDone: action.payload.isDone,
      });
    },
    remove: (state, action) => state.filter((todo) => todo.id !== action.payload),
    toggleStatusTodo: (state, action) => {
      const getTodoById = state.filter((toDo) => toDo.id === action.payload);
      getTodoById[0].isDone = !getTodoById[0].isDone;
    },
  },
});

export const { add, remove, toggleStatusTodo } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
