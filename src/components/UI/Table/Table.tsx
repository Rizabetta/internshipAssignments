import { nanoid } from "nanoid";
import { Table as TableAntd } from "antd";

type Posts = {
  posts: {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }[];
};

const Table = ({ posts }: Posts) => {
  let columns;
  let dataSource;
  if (posts && posts.length > 0) {
    const keys = Object.keys(posts[0]);
    columns = keys.map((key) => ({
      title: key,
      dataIndex: key,
      key: key,
      sorter: (a: any, b: any) => a.key - b.key,
    }));
    dataSource = posts.map((el) => ({ ...el, key: nanoid() }));
  }

  return (
    <div>
      <TableAntd
        dataSource={dataSource}
        columns={columns}
        pagination={{
          defaultPageSize: 2,
          showSizeChanger: true,
          pageSizeOptions: [2, 4, 6, 8],
        }}
      ></TableAntd>
    </div>
  );
};
export { Table };
