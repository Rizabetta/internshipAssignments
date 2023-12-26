import { useEffect, useState } from "react";
import "./App.css";
import { Methods, requests } from "./api/universal";
import { _Table } from "./components";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    requests.universal(Methods.GET, "1/comments").then((r) => (setPosts(r.data)));
  }, []);

  return (
     <_Table posts={posts}></_Table>
  );
}

export default App;
