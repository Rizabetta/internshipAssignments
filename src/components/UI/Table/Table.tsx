import { Table as TableAntd } from "antd";
import { AnyObject } from "antd/es/_util/type";

type TPostsFiltered = {
  dataSource?: readonly AnyObject[];
  columns?: any;
};

const Table = ({ dataSource, columns }: TPostsFiltered) => {
  return (
    <TableAntd
      dataSource={dataSource}
      columns={columns}
      pagination={{
        defaultPageSize: 2,
        showSizeChanger: true,
        pageSizeOptions: [2, 4, 6, 8],
      }}
    ></TableAntd>
  );
};
export { Table };
