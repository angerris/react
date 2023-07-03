import React, { useState, useEffect } from "react";

export default function ProfileStatus({
  fullName,
  status,
  aboutMe,
  updateStatus,
}) {
  const [title, setTitle] = useState(status);
  const [editMode, setEditMode] = useState(false);

  const onEditMode = () => setEditMode(true);

  const offEditMode = () => {
    updateStatus(title);
    setEditMode(false);
  };

  useEffect(() => {
    setTitle(status);
  }, [status]);

  const onChangeSetTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <div>
      <p>{fullName}</p>
      {editMode ? (
        <input
          autoFocus={true}
          onBlur={offEditMode}
          onChange={onChangeSetTitle}
          value={title}
        />
      ) : (
        <span onDoubleClick={onEditMode}>{title || "no status"}</span>
      )}
      <p>{aboutMe}</p>
    </div>
  );
}
