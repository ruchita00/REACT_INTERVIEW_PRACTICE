import React, { useState } from "react";

const WorkTitle = ({ title, workList, setWorkList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleDelete = (clickTitle) => {
    let workListFilered = workList.filter((item) => item !== clickTitle);
    setWorkList(workListFilered);
  };

  const handleSave = () => {
    let workListUpdated = workList.map((item) =>
      item === title ? newTitle : item
    );
    setWorkList(workListUpdated);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewTitle(title);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave}>save</button>
          <button onClick={handleCancel}>cancel</button>
        </>
      ) : (
        <>
          <p>{title}</p>
          <button onClick={handleEdit}>edit</button>
          <button onClick={() => handleDelete(title)}>delete</button>
        </>
      )}
    </div>
  );
};

export default WorkTitle;
