import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import { store } from "./store";
import Detail from "./routes/TodoDetail";
import { Provider } from "react-redux";
import { DarkModeProvider } from "./context/DarkModeContext";

const App = () => {
  return (
    <Provider store={store}>
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="/:id" Component={Detail}></Route>
          </Routes>
        </Router>
      </DarkModeProvider>
    </Provider>
  );
};

export default App;
