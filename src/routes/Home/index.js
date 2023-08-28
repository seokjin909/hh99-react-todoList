import React from "react";
import { Container } from "./styles";
import TodoList from "../../components/TodoList";
import Header from "../../components/Header";

const Home = () => {
  return (
    <main>
      <Container>
        <Header />
        <TodoList />
      </Container>
    </main>
  );
};

export default Home;
