import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

// 그렇다면 Redux를 React 환경에서 사용할 때는 어떠한 방식으로 사용되는가?

// Redux의 getState() 함수를 대신해서 Connect() 함수를 사용해서
// Store에 저장된 데이터를 props의 형태로 데이터가 필요한 컴포넌트로 전달하고
// 마찬가지로 getState() 함수처럼 dispatch(), 즉 데이터를 Store에 전달하는 함수 또한 Store.js에 작성해놓은
// 함수를 props로 전달받아서 해당 컴포넌트에서 사용하는 방식으로 처리한다.
const Home = ({ toDos, addToDo }) => {
  // toDos = store.getState();
  // addToDo = store.dispatch();

  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state) {
  // props인 toDos로 Store에 저장된 State를 담도록 하고
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  // props인 addToDo 함수는 매개변수로 text를 받으면 store에 등록되어 있는 Reducer 함수를 작동시키게 한다
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

// connect 함수는 Store에 저장된 State를 받는 함수와 Store로 전달할 함수를 필요로한다.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
