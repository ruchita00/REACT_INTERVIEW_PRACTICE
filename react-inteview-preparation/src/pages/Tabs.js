import React, { useState } from "react";

const DummyData = [
  { id: 1, title: "title 1", content: "content1" },
  { id: 2, title: "title 2", content: "content2" },
  { id: 3, title: "title 3", content: "content3" },
  { id: 4, title: "title 4", content: "content4" },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const onTitleClick = (id) => {
    setActiveTab(id);
  };
  return (
    <div>
      <div>
        {DummyData?.map((item, id) => {
          return (
            <button
              onClick={() => onTitleClick(item.id)}
              className={`${activeTab === item.id ? "active" : ""}`}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      {DummyData.map((item) =>
        activeTab === item.id ? <div>{item.content}</div> : null
      )}
    </div>
  );
};

export default Tabs;
