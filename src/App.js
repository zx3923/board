import Main from "./components/Main";
import Write from "./components/Write";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./components/View";
import { useRef } from "react";

function App() {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      alert(" 내용이 비었습니다. ");
      return;
    }
    setValue("");
    onInsert(value);
  };

  const onInsert = async (board_content) => {
    const data = await axios({
      url: "http://localhost:8000/list",
      method: "post",
      data: { board_content },
    });
    setTitles(data.data);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: "http://localhost:8000/list",
        method: "get",
      });
      setTitles(data.data);
      setIsLoading(false);
    };
    try {
      getData();
    } catch (e) {
      setError(e);
    }
  }, []);
  if (error) {
    return <>에러: {error.messahe}</>;
  }
  if (isLoading) {
    return <>Loading...</>;
  }

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
                value={value}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
