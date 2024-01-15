import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "antd";
import { nanoid } from "nanoid";
import { Modal } from "../../components";
import { clientDetails } from "./FormClientDetails.constant";

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

  type TFormData = {
    Birthday: any;
    City: any;
    ITN: number;
    MiddleName: string;
    Name: string;
    PhoneNumber: number;
    DatesTraining: any;
    Surname: string;
  };

  const { handleSubmit, control } = useForm<TFormData>();
  const onSubmit: SubmitHandler<TFormData> = (data) => {
    if (data.Birthday && data.DatesTraining && data.City) showModal();
    console.log(data);
  };

  return (
    <main>
      <h1>Сведения о клиенте</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {clientDetails.map(
          ({ label, name, component, ...props }) => (
            <div key={nanoid()}>
              <label htmlFor={name}>{label}</label>
              <Controller
                control={control}
                name={name as keyof TFormData}
                render={({ field }) => {
                  const { ref, ...rest } = field;
                  const FieldComponent = component;
                  return <FieldComponent {...rest} {...props} />;
                }}
              />
            </div>
          )
        )}

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
