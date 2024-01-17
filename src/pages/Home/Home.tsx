import { useEffect, useState } from "react";
import { Methods, requests } from "../../api/api.config";
import { Table } from "../../components";
import { useNavigate } from "react-router-dom";
import style from "./Home.module.scss";

type TPosts = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}[];

function Home() {
  const [posts, setPosts] = useState<TPosts>([]);
  useEffect(() => {
    requests
      .makeApiRequest(Methods.GET, "/posts/1/comments")
      .then((r) => setPosts(r.data));
  }, []);
  const filteredPosts = posts.map((el) => {
    const { postId, ...rest } = el;
    return { ...rest };
  });
  const navigate = useNavigate();

  return (
    <section className={style.container}>
      <button onClick={() => navigate("/details")}>Создать</button>
      <Table posts={filteredPosts}></Table>
    </section>
  );
}

export { Home };
