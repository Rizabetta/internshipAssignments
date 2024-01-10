import { useEffect, useState } from "react";
import { Methods, requests } from "../../api/api.config";
import { Table } from "../../components";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    requests
      .makeApiRequest(Methods.GET, "/posts/1/comments")
      .then((r) => setPosts(r.data));
  }, []);

  const navigate = useNavigate();

  return (
    <main>
      <button onClick={() => navigate("/details")}>Создать</button>
      <Table posts={posts}></Table>
    </main>
  );
}

export { Home };
