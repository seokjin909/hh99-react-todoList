import React from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

function Detail({ toDos }) {
  const myId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

  return (
    <Wrap>
      <Card>
        <Header>
          <p>ID : {toDo?.id}</p>
          <Link to={`/`}>
            <button>이전으로</button>
          </Link>
        </Header>
        <h4>{toDo?.title}</h4>
        <p>{toDo?.body}</p>
      </Card>
    </Wrap>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
