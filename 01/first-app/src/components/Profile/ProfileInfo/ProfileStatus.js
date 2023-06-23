import React, { useState, useEffect } from "react";

export default function ProfileStatus(props) {
  const [title, setTitle] = useState(props.status);
  const [editMode, setEditMode] = useState(false);

  const onEditMode = () => setEditMode(true);

  const offEditMode = () => {
    props.updateStatus(title);
    setEditMode(false);
  };

  useEffect(() => {
    setTitle(props.status);
  }, [props.status]);

  const onChangeSetTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <div>
      <p>{props.fullName}</p>
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
      <p>{props.aboutMe}</p>
    </div>
  );
}
