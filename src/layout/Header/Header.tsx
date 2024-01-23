import { ReactNode } from "react";
import style from "./Header.module.scss";

type THeaderProps = {
  children?: ReactNode;
};

const Header = ({ children }: THeaderProps) => {
  return (
    <header className={style.container}>
      <div className={style.content}>{children}</div>
    </header>
  );
};

export { Header };
