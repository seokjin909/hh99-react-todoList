import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

// 문자열 형태로 reducer 함수에 직접 사용할 수도 있지만 변수로 저장함으로써 디버깅 과정에서 에러를 쉽게 색출하기 위해
// const ADD = "ADD";
// const DELETE = "DELETE";

// 마찬가지로 dispatch 함수로 설정해서 사용할 수 있지만 변수로 저장함으로써 코드의 간략화와 불필요한 재사용을 줄일 수 있다
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// React에서 중요한 "불변성"을 지키는 것과 마찬가지로 Redux에서도 Store에 저장된 데이터의 불변성을 지키기 위해
// 데이터를 변형(mutation)하지 않고 새로운 배열을 생성해서 처리되도록 코드를 작성해야 한다
const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
