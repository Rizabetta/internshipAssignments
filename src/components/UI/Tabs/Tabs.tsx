import { useState } from "react";
import "./Tabs.scss";

type TTabsProps = {
  tabsList: {
    id: number;
    title: string;
    component: JSX.Element;
  }[];
};
function Tabs({ tabsList }: TTabsProps) {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleTabs = (index: number) => {
    setToggleTab(index);
  };

  return (
    <div className="tabs__container">
      <div className="tabs__block">
        {tabsList.map((item) => (
          <div
            key={item.id}
            className={toggleTab === item.id ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTabs(item.id)}
          >
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="tabs__content">
        {tabsList.map((item) => (
          <div
            key={item.id}
            className={
              toggleTab === item.id ? "content active-content" : "content"
            }
          >
            {item.component}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Tabs };
