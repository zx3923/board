import BoardList from "./components/BoardList";
import Write from "./components/Write";
import axios, { Axios } from "axios";

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
      <BoardList></BoardList>
      <Write onInsert={onInsert}></Write>
    </>
  );
}

export default App;
