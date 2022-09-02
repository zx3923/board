import Main from "./components/Main";
import Write from "./components/Write";
import axios, { Axios } from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./components/View";

function App() {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");

  const [value, setValue] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      alert(" 내용이 비었습니다. ");
      return;
    }
    setTitles((currentArray) => [title, ...currentArray]);

    setTitle("");
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main titles={titles} />}></Route>
          <Route path="/view" element={<View />}></Route>
          <Route
            path="/write"
            element={
              <Write
                onChange={onChange}
                onSubmit={onSubmit}
                title={title}
                titles={titles}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
