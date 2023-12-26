import { nanoid } from "nanoid";
import { Col, Row, Table, Typography } from "antd";

type Posts = {
  posts: {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }[];
};

function _Table({ posts }: Posts) {
  let columns;
  let dataSource;
  if (posts && posts.length > 0) {
    const keys = Object.keys(posts[0]);
    columns = keys.map((key) => ({
      title: key,
      dataIndex: key,
      key: key,
      render: (text: string) => (
        <Typography.Text copyable>{text}</Typography.Text>
      ),
    }));
    dataSource = posts.map((el) => ({ ...el, key: nanoid() }));
  }

  let column = undefined;
  if (posts && posts.length > 0) column = Object.keys(posts[0]);
  return (
    <div>
      <Row>
        <Col xs={24}>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{
              defaultPageSize: 2,
              showSizeChanger: true,
              pageSizeOptions: [2, 4, 6, 8],
            }}
          ></Table>
        </Col>
      </Row>
    </div>
  );
}
export { _Table };