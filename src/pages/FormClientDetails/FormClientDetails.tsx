import { useState } from "react";
import { Button } from "antd";
import { nanoid } from "nanoid";
import { Modal } from "../../components";
import { clientDetails } from "./FormClientDetails.constant";
import { useForm, Controller } from "react-hook-form";

const FormClientDetails = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const { handleSubmit, control } = useForm();
  const onSubmit = (data: any) => {
    showModal();
    console.log(data);
  };

  return (
    <main>
      <h1>Сведения о клиенте</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {clientDetails.map(({ label, component, ...props }) => (
          <div key={nanoid()}>
            <label htmlFor={label}>{label}</label>
            <Controller
              control={control}
              name={label}
              render={({ field }) => {
                const { ref, ...rest } = field;
                const FieldComponent = component;
                return <FieldComponent {...rest} {...props} />;
              }}
            />
          </div>
        ))}

        <button type="submit">Сохранить</button>

        <Modal
          title={"Вы хотите очистить форму?"}
          open={open}
          handleOk={handleOk}
          handleCancel={handleCancel}
        >
          <Button key="back" onClick={handleCancel}>
            Нет
          </Button>
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Да
          </Button>
        </Modal>
      </form>
    </main>
  );
};

export { FormClientDetails };
