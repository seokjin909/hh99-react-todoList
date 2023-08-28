import { createSlice } from "@reduxjs/toolkit";
import cuid from "cuid";

const initialState = [
  {
    id: "cllrjmtp2000008mf6bnl4cja", // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    description: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: "cllrjmtp2000008mf6bnl4cwe1", // id는 모두 고유값이어야 합니다.
    title: "점심 먹기",
    description: "점심 뭐먹지..?",
    isDone: true,
  },
];

export const selectToDos = (state) => state.toDos;

export const selectToDoById = (state, toDoId) => {
  const toDos = selectToDos(state);
  return toDos.find((toDo) => toDo.id === toDoId);
};

// 리듀서의 확장을 위해서 store.js 파일은 최대한 configureStore를 생성하고
// 연결하는 것에 중점을 둬라!
const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({
        id: cuid(),
        title: action.payload.title,
        description: action.payload.description,
        isDone: false,
      });
    },
    remove: (state, action) => state.filter((todo) => todo.id !== action.payload),
    toggleStatusTodo: (state, action) => {
      const toDo = state.find((toDo) => toDo.id === action.payload);
      if (toDo) {
        toDo.isDone = !toDo.isDone;
      }
    },
  },
});

export const { add, remove, toggleStatusTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
