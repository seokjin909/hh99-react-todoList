import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";
import styled from "styled-components";

const padding = "1em";
const Section = styled.section`
  color: white;
  padding: ${padding};
  background: ${(props) => props.$background};
`;

const Button = styled.button`
  padding: 5px;
  background-color: royalblue;
  color: white;
  border-radius: 5px;
`;

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Form = styled.form`
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 1px solid grey;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin: 5px 5px 0 0;
  border-radius: 5px;
  padding: 2px;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Home = ({ toDos, addToDo }) => {
  const [toDo, setToDo] = useState({
    id: 2,
    title: "",
    body: "",
    isDone: false,
  });

  const onChange = useCallback(
    (event) => {
      const insertObj = {
        ...toDo,
        [event.target.name]: event.target.value,
      };
      setToDo(insertObj);
    },
    [toDo]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(toDo);
    setToDo({
      id: toDo.id + 1,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <Container>
      <h1>My Todo List</h1>
      <Form onSubmit={onSubmit}>
        <div>
          <label>제목 : </label>
          <Input type="text" name="title" value={toDo.title} onChange={onChange} />
          <label>내용 : </label>
          <Input type="text" name="body" value={toDo.body} onChange={onChange} />
        </div>
        <Button>추가하기</Button>
      </Form>
      <Section $background="red">Working 🔥</Section>
      <List>{toDos.map((toDo) => (toDo.isDone ? <></> : <ToDo {...toDo} key={toDo.id} />))}</List>
      <Section $background="royalblue">Done 🎉</Section>
      <List>{toDos.map((toDo) => (!toDo.isDone ? <></> : <ToDo {...toDo} key={toDo.id} />))}</List>
    </Container>
  );
};

function mapStateToProps(state) {
  // props인 toDos로 Store에 저장된 State를 담도록 하고
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  // props인 addToDo 함수는 매개변수로 text를 받으면 store에 등록되어 있는 Reducer 함수를 작동시키게 한다
  return {
    addToDo: (toDo) => dispatch(add(toDo)),
  };
}

// connect 함수는 Store에 저장된 State를 받는 함수와 Store로 전달할 함수를 필요로한다.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
