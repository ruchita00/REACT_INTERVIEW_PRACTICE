import React, { useState } from "react";

const items = [
  { title: "item 1", content: " content for item 1" },
  { title: "item 2", content: " content for item 2" },
  { title: "item 3", content: " content for item 3" },
];
const AccordionItem = ({ setActiveIndex, activeIndex, item, index }) => {
  const isActive = activeIndex === index;
  const handleToggle = () => {
    setActiveIndex(isActive ? null : index);
  };
  return (
    <div>
      <div onClick={handleToggle}>
        <h3>{item.title}</h3>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div>{item.content}</div>}
    </div>
  );
};
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

export default Accordion;
