import { nanoid } from "nanoid";
import {
  TFormData,
  clientDetails,
} from "../../../pages/FormClientDetails/FormClientDetails.constant";
import style from "./Document.module.scss";
import { Button } from "antd";
import edit from "../../../assets/svg/edit_icon_128873.svg";
import { useParams } from "react-router-dom";
import { useId } from "react";

const Document = ({ data }: any) => {
  const params = useParams();
const id = useId();
console.log(id);

  return (
    <>
      <div className={style.header}>
        <h1>
          Запрос №{params.id} от {data.todayDate}
        </h1>
        <span className={style.status}>Новый</span>
        <Button className={style.edit}>
          <img src={edit} />
        </Button>
      </div>

      {clientDetails.map((detail) => (
        <div className={style.detail} key={nanoid()}>
          <p className={style.detailTitle}>{detail.label}</p>
          <p>{data[detail.name as keyof TFormData] || "-"}</p>
        </div>
      ))}
    </>
  );
};
export { Document };
