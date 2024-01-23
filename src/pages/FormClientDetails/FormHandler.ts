import { useState } from "react";
import { useForm } from "react-hook-form";
import { TFormData } from "./FormClientDetails.constant";

export const FormHandler = () => {
  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors },
  } = useForm<TFormData>();
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const showModalCancel = () => {
    setOpenModalCancel(true);
  };
  const handleOkModalCancel = () => {
    reset();
    setOpenModalCancel(false);
  };
  const handleCancelModalCancel = () => {
    setOpenModalCancel(false);
  };
  return {
    openModalCancel,
    handleOkModalCancel,
    handleCancelModalCancel,
    showModalCancel,
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors },
  };
};
