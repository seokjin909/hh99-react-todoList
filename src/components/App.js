import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/:id" Component={Detail}></Route>
      </Routes>
    </Router>
  );
};

export default App;
