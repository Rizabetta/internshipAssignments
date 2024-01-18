import { ReactNode } from "react";
import style from "./FormWrapper.module.scss";

export type TChildrenProps = {
  children: ReactNode;
};

const FormWrapper = ({ children }: TChildrenProps) => {
  return <div className={style.container}>{children}</div>;
};
export { FormWrapper };
