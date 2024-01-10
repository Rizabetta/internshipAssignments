import { ReactNode } from "react";
import { Modal as ModalAntd } from "antd";
import { ModalFooterRender } from "antd/es/modal/interface";

type TModalProps = {
  title: string;
  children?: ReactNode | ModalFooterRender;
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

const Modal = ({
  title,
  children,
  open,
  handleOk,
  handleCancel,
}: TModalProps) => {
  return (
    <ModalAntd
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={children}
    >
      <p>{title}</p>
    </ModalAntd>
  );
};
export { Modal };
