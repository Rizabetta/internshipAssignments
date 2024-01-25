import { useState } from "react";
import { Methods, requests } from "../../api/api.config";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { RouteNames } from "../../routers/routes";

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  const handleOk = () => {
    requests
      .makeApiRequest(Methods.POST, "/posts")
      .then((res) => console.log(res.status));
    const id = nanoid();
    const data = localStorage.getItem("current");
    localStorage.setItem(`${id}`, data || "");
    navigate(`${RouteNames.DETAILS}/${id}`);
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return { open, showModal, handleOk, handleCancel };
};
