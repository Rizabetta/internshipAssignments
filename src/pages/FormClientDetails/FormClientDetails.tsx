import { useState } from "react";
import { useForm, Controller, SubmitHandler, FieldPath } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { nanoid } from "nanoid";
import style from "./FormClientDetails.module.scss";
import { FormWrapper, Modal } from "../../components";
import { clientDetails } from "./FormClientDetails.constant";

const FormClientDetails = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
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

  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors },
  } = useForm<TFormData>();
  const onSubmit: SubmitHandler<TFormData> = (data) => {
    if (!data.Name) errors.Name;
    showModal();
    console.log(data);
  };
  const handleButtonClick = async () => {
    const fieldsToValidate: FieldPath<TFormData>[] = ["Name", "Surname", "ITN"];
    await trigger(fieldsToValidate);
  };

  const handleBlur = async (event: any) => {
    const inputName = event.target.name;
    const fieldsToValidate: FieldPath<TFormData>[] = ["Name", "Surname", "ITN"];
    if (fieldsToValidate.includes(inputName)) await trigger(inputName);
  };

  const navigate = useNavigate();

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

  return (
    <section className={style.container}>
      <div>
        <Button className={style.navigateBtn} onClick={() => navigate("/")}>
          &lt; Все документы
        </Button>
        <FormWrapper>
          <h1>Сведения о клиенте</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {clientDetails.map(
              ({ rules, label, name, placeholder, component, ...props }) => (
                <div className={style.formItem} key={nanoid()}>
                  <p className={style.itemName}>{label}</p>
                  <Controller
                    control={control}
                    name={name as keyof TFormData}
                    rules={rules || {}}
                    render={({ field }) => {
                      const { ref, onBlur, ...rest } = field;
                      const FieldComponent = component;
                      return (
                        <div className={style.itemContent}>
                          <FieldComponent
                            className={style.itemInput}
                            status={
                              errors[name as keyof TFormData] ? "error" : ""
                            }
                            placeholder={
                              placeholder as
                                | (string & [string, string])
                                | undefined
                            }
                            onBlur={handleBlur}
                            {...rest}
                            {...props}
                          />
                            <span className={style.itemMessage}>
                              {errors[name as keyof TFormData]?.message?.toString()}
                            </span>
                        </div>
                      );
                    }}
                  />
                </div>
              )
            )}

            <Button
              className={style.btnSubmit}
              key="submit"
              type="primary"
              htmlType="submit"
              onClick={handleButtonClick}
            >
              Применить
            </Button>
            <Button onClick={showModalCancel}>Отменить</Button>
            <Modal
              title={"Применить изменения?"}
              open={open}
              handleOk={handleOk}
              handleCancel={handleCancel}
            >
              <Button key="back" onClick={handleCancel}>
                Нет
              </Button>
              <Button type="primary" onClick={handleOk}>
                Да
              </Button>
            </Modal>
            <Modal
              title={"Вы хотите очистить форму?"}
              open={openModalCancel}
              handleOk={handleOkModalCancel}
              handleCancel={handleCancelModalCancel}
            >
              <Button key="back" onClick={handleCancelModalCancel}>
                Нет
              </Button>
              <Button type="primary" onClick={handleOkModalCancel}>
                Да
              </Button>
            </Modal>
          </form>
        </FormWrapper>
      </div>
    </section>
  );
};

export { FormClientDetails };
