import React from "react";
import { connect } from "react-redux";
import { remove, toggleStatusTodo } from "../store";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ToDo = ({ title, onBtnClick, id, body, updateToDo, isDone, toDos }) => {
  return (
    <>
      <Card>
        <Link to={`/${id}`}>{title}</Link>
        <p>{body}</p>
        <ButtonArr>
          <Button onClick={onBtnClick} $background="black">
            삭제
          </Button>
          {isDone ? (
            <Button onClick={updateToDo} $background="red">
              취소
            </Button>
          ) : (
            <Button onClick={updateToDo} $background="royalblue">
              완료
            </Button>
          )}
        </ButtonArr>
      </Card>
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
    updateToDo: () => dispatch(toggleStatusTodo(ownProps.id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);

const Card = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 200px;
  height: 100px;
  border: 3px solid green;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Button = styled.button`
  padding: 3px;
  width: 90px;
  border-radius: 5px;
  background-color: ${(props) => props.$background};
  color: white;
`;

const ButtonArr = styled.div`
  display: flex;
  justify-content: space-between;
`;
