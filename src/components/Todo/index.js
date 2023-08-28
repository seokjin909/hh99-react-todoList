import React from "react";
import { Link } from "react-router-dom";
import { Button, Description, TodoWrap } from "./styles";

const ToDo = ({ todo, handleToggleIsDone, handleDeleteToDo }) => {
  return (
    <TodoWrap>
      <input type="checkbox" />
      <Link to={`/${todo.id}`} style={{ textDecoration: "none" }}>
        <strong>{todo.title}</strong>
      </Link>
      <Description>{todo.description}</Description>
      <Button onClick={handleDeleteToDo} $background="black">
        삭제
      </Button>
      <Button onClick={handleToggleIsDone}>{todo.isDone ? "취소하기" : "완료하기"}</Button>
    </TodoWrap>
  );
};

export default ToDo;
