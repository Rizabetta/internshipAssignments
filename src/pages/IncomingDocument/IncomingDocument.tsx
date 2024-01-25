import { useNavigate, useParams } from "react-router-dom";
import {
  Document,
  DocumentHistory,
  RelatedDocuments,
  Tabs,
} from "../../components";
import style from "./IncomingDocument.module.scss";
import { Button } from "antd";

const IncomingDocument = () => {
  const params = useParams();
  let str;
  let data;
  if (!!params.id) str = localStorage.getItem(params.id);
  if (!!str) data = JSON.parse(str);

  const navigate = useNavigate();
  const tabsList = [
    { id: 1, title: "Документ", component: <Document data={data} /> },
    {
      id: 2,
      title: "История документа",
      component: <DocumentHistory></DocumentHistory>,
    },
    { id: 3, title: "Связанные документы", component: <RelatedDocuments /> },
  ];
  return (
    <section className={style.container}>
      {str ? 
        <>
          <Button className={style.navigateBtn} onClick={() => navigate("/")}>
            &lt; Все документы
          </Button>
          <Tabs tabsList={tabsList} />
        </> : <p>Страница не существует</p>
      }
    </section>
  );
};

export { IncomingDocument };
