import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Card, DetailHeader, Wrap } from "./styles";
import { selectToDoById } from "../../features/todo/toDoSlice";

const TodoDetail = () => {
  const { id } = useParams();
  console.log(useParams());
  const toDo = useSelector((state) => selectToDoById(state, id));

  return (
    <Wrap>
      <Card>
        <DetailHeader>
          <p>ID : {toDo?.id}</p>
          <Link to={`/`}>
            <button>이전으로</button>
          </Link>
        </DetailHeader>
        <h4>{toDo?.title}</h4>
        <p>{toDo?.body}</p>
      </Card>
    </Wrap>
  );
};

export default TodoDetail;
