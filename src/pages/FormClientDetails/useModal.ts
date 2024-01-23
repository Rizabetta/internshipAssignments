import { useState } from "react";
import { Methods, requests } from "../../api/api.config";

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    requests
      .makeApiRequest(Methods.POST, "/posts")
      .then((res) => console.log(res.status));
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return { open, showModal, handleOk, handleCancel };
};
