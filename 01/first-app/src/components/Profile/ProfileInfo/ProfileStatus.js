import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activateEditMode() {
    this.setState({ editMode: true });
  }
  deactivateEditMode() {
    this.setState({ editMode: false });
  }
  render() {
    return (
      <>
        <div>
          <p>{this.props.fullName}</p>
        </div>
        <div>
          {this.state.editMode ? (
            <input
              autoFocus={true}
              type="text"
              value={this.props.status}
              onBlur={() => {
                this.deactivateEditMode();
              }}
            />
          ) : (
            <p
              onDoubleClick={() => {
                this.activateEditMode();
              }}
            >
              {this.props.status}
            </p>
          )}
        </div>
        <div>
          <p>{this.props.aboutMe}</p>
        </div>
      </>
    );
  }
}
export default ProfileStatus;
