import React, { useState, useEffect } from "react";

export default function ProfileStatus({ status, updateStatus }) {
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
    <div className="statusContainer">
      {editMode ? (
        <input
          className="status status-field"
          autoFocus={true}
          onBlur={offEditMode}
          onChange={onChangeSetTitle}
          value={title}
        />
      ) : (
        <span className="status" onDoubleClick={onEditMode}>
          {title || "no status"}{" "}
          {/* <FontAwesomeIcon icon={faEdit} onClick={onEditMode} /> */}
        </span>
      )}
    </div>
  );
}
