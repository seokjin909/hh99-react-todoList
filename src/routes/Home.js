import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";
import styled from "styled-components";

const Home = ({ toDos, addToDo }) => {
  const [toDo, setToDo] = useState({
    id: parseInt(`${new Date().getTime()}`),
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
    if (toDo.title === "") {
      alert("제목을 입력하세요!");
      return;
    } else if (toDo.body === "") {
      alert("내용을 입력하세요!");
      return;
    }

    addToDo(toDo);
    setToDo({
      id: parseInt(`${new Date().getTime()}`),
      title: "",
      body: "",
      isDone: false,
    });
    alert("등록 완료 🎉");
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
      <List>{toDos.map((toDo) => (toDo.isDone ? <div key={toDo.id}></div> : <ToDo {...toDo} key={toDo.id} />))}</List>
      <Section $background="royalblue">Done 🎉</Section>
      <List>{toDos.map((toDo) => (toDo.isDone ? <ToDo {...toDo} key={toDo.id} /> : <div key={toDo.id}></div>))}</List>
    </Container>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (toDo) => dispatch(add(toDo)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
