import { useMemo } from "react";
import { Controller, SubmitHandler, FieldPath } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { nanoid } from "nanoid";
import style from "./FormClientDetails.module.scss";
import { FormWrapper, Modal } from "../../components";
import { TFormData, clientDetails } from "./FormClientDetails.constant";
import { useModal } from "./useModal";
import { FormHandler } from "./FormHandler";

const FormClientDetails = () => {
  const { open, showModal, handleOk, handleCancel } = useModal();
  const {
    openModalCancel,
    handleOkModalCancel,
    handleCancelModalCancel,
    showModalCancel,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = FormHandler();

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    showModal();
    console.log(data);
  };

  const fieldsToValidate = useMemo(() => {
    const requiredDetails = clientDetails.filter((detail) => detail.required);
    return requiredDetails.map(
      (detail) => detail.name
    ) as FieldPath<TFormData>[];
  }, [clientDetails]);

  const handleButtonClick = async () => {
    await trigger(fieldsToValidate);
  };

  const handleBlur = async (event: any) => {
    const inputName = event.target.name;
    if (fieldsToValidate.includes(inputName)) await trigger(inputName);
  };

  const navigate = useNavigate();
  const modalData = [
    {
      title: "Применить изменения?",
      open: open,
      handleOk: handleOk,
      handleCancel: handleCancel,
      onClickNo: handleCancel,
      onClickYes: handleOk,
    },
    {
      title: "Вы хотите очистить форму?",
      open: openModalCancel,
      handleOk: handleOkModalCancel,
      handleCancel: handleCancelModalCancel,
      onClickNo: handleCancelModalCancel,
      onClickYes: handleOkModalCancel,
    },
  ];

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
                            {errors[
                              name as keyof TFormData
                            ]?.message?.toString()}
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
            {modalData.map((element) => (
              <Modal
                key={nanoid()}
                title={element.title}
                open={element.open}
                handleOk={element.handleOk}
                handleCancel={element.handleCancel}
              >
                <Button key="back" onClick={element.onClickNo}>
                  Нет
                </Button>
                <Button type="primary" onClick={element.onClickYes}>
                  Да
                </Button>
              </Modal>
            ))}
          </form>
        </FormWrapper>
      </div>
    </section>
  );
};

export default FormClientDetails;
