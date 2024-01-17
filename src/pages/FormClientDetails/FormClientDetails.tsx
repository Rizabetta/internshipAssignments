import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "antd";
import { nanoid } from "nanoid";
import style from "./FormClientDetails.module.scss";
import { FormWrapper, Modal } from "../../components";
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
    <section className={style.container}>
      <FormWrapper>
        <h1>Сведения о клиенте</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {clientDetails.map(
            ({ label, name, placeholder, component, ...props }) => (
              <div className={style.formItem} key={nanoid()}>
                <p className={style.itemName}>{label}</p>
                <Controller
                  control={control}
                  name={name as keyof TFormData}
                  render={({ field }) => {
                    const { ref, ...rest } = field;
                    const FieldComponent = component;
                    return (
                      <FieldComponent
                        placeholder={
                          placeholder as (string & [string, string]) | undefined
                        }
                        {...rest}
                        {...props}
                      />
                    );
                  }}
                />
              </div>
            )
          )}

          <button className={style.btnSubmit} type="submit">
            Сохранить
          </button>

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
      </FormWrapper>
    </section>
  );
};

export { FormClientDetails };
