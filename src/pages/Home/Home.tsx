import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { nanoid } from "nanoid";
import style from "./Home.module.scss";
import { Methods, requests } from "../../api/api.config";
import { Table } from "../../components";

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

  let columns;
  let dataSource;
  if (filteredPosts && filteredPosts.length > 0) {
    const keys = [
      { title: "Номер", key: "id" },
      { title: "Название", key: "name" },
      { title: "Почта", key: "email" },
      { title: "Запись", key: "body" },
    ];
    columns = keys.map((key) => ({
      title: key.title,
      dataIndex: key.key,
      key: key.key,
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a[key.key] - b[key.key],
      ellipsis: true,
    }));
    dataSource = filteredPosts.map((el) => ({ ...el, key: nanoid() }));
  }

  return (
    <section className={style.page}>
      <div className={style.container}>
        <Button onClick={() => navigate("/details")}>Создать</Button>
        <Table dataSource={dataSource} columns={columns}></Table>
      </div>
    </section>
  );
}

export { Home };
