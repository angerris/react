import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import pfp from "./../../../assets/profpic.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

let mapStateToProps = (state) => {
  debugger;
  return {
    newPostText: state.profilePage.newPostText,
    post: state.profilePage.postsData.map((p) => (
      <PostView
        photo={state.profilePage.profile.photos.small}
        message={p.message}
        likeCount={p.likeCount}
        fullName={state.profilePage.profile.fullName}
      />
    )),
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updatePostText: (text) => {
      dispatch(onPostChangeActionCreator(text));
    },
  };
};
export function PostView(props) {
  return (
    <div className="postView">
      <div className="postUserData">
        {props.photo ? (
          <img
            src={props.photo}
            alt=""
            srcset=""
            width={50}
            className="postViewPfp"
          />
        ) : (
          <img src={pfp} alt="" srcset="" width={50} className="postViewPfp" />
        )}
        <div>{"@" + props.fullName}</div>
      </div>

      <div>{props.message}</div>
      <div>
        <div className="likedData">
          <FontAwesomeIcon icon={faHeart} /> {props.likeCount}
        </div>
      </div>
    </div>
  );
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
