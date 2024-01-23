import { Outlet } from "react-router-dom";
import { Header } from "..";
import avatar from "../../assets/png/profile-user.png";
import { Suspense } from "react";

const Layout = () => {
  const headerData = [
    { id: 1, name: "Иван" },
    { id: 2, name: "Иванов" },
  ];
  return (
    <>
      <Header>
        {headerData.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
        <img src={avatar}></img>
      </Header>
      <Suspense fallback={<p>Loadig...</p>}>
      <Outlet />
      </Suspense>
    </>
  );
};

export { Layout };
