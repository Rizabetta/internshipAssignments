import { useEffect, useState } from "react";
import { Methods, Url, requests } from "../../api/api.config";
import { Table } from "../../components";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    requests
      .makeApiRequest(Methods.GET, Url.POST + "/1/comments")
      .then((r) => setPosts(r.data));
  }, []);
  return (
    <main>
      <a href="/details">Создать</a>
      <Table posts={posts}></Table>
    </main>
  );
}

export { Home };
