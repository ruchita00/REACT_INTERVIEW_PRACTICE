import React, { useState } from "react";
import WorkTitle from "../components/WorkTitle";

const TodoNew = () => {
  const [title, setTitle] = useState(null);
  const [workList, setWorkList] = useState([]);

  const handleSave = () => {
    setWorkList([...workList, title]);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" text="submit" onClick={handleSave} />
      {workList.map((item) => {
        return (
          <WorkTitle
            title={item}
            workList={workList}
            setWorkList={setWorkList}
          />
        );
      })}
    </div>
  );
};

export default TodoNew;
