import BoardList from "./components/BoardList";
import Write from "./components/Write";
import axios, { Axios } from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const onInsert = async () => {
    await axios({ url: "http://localhost:8000/list/", method: "get" }).then(
      () => {
        alert("확인");
      }
    );
  };
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<BoardList></BoardList>}></Route>
          <Route
            path="/write"
            element={<Write onInsert={onInsert}></Write>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
