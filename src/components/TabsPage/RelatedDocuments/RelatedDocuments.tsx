import { Table } from "../..";

const RelatedDocuments = () => {
  let columns;
  const keys = [
    { title: "Ссылка на документ", key: "link" },
    { title: "Номер документа", key: "number" },
    { title: "Дата создания", key: "date" },
    { title: "Ответственный", key: "responsible" },
    { title: "Направление", key: "direction" },
    { title: "Статсус докумета", key: "status" },
  ];
  columns = keys.map((key) => ({
    title: key.title,
    dataIndex: key.key,
    key: key.key,
  }));
  return <Table columns={columns}></Table>;
};
export { RelatedDocuments };
