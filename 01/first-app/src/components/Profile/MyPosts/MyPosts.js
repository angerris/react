import { Formik, Form } from "formik";

export default function MyPosts(props) {
  let addPost = () => {
    props.addPost();
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updatePostText(text);
  };
  return (
    <>
      <div className="myPostsContainer">
        <PostInput addPost={addPost} onPostChange={onPostChange} {...props} />
        <Post {...props} />
      </div>
    </>
  );
}
export function PostInput(props) {
  return (
    <Formik
      initialValues={{
        post: "",
      }}
      onSubmit={() => {
        props.addPost();
      }}
    >
      <Form className="addPost">
        <h3>Add post</h3>
        <div className="addPostForm">
          <input
            placeholder="Write something..."
            type="text"
            value={props.newPostText}
            onChange={props.onPostChange}
            className="addPostField"
          />
          <button type="submit" className="btn btn-primary">
            Publish
          </button>
        </div>
      </Form>
    </Formik>
  );
}
export function Post(props) {
  return (
    <div className="myPosts">
      <h3>My posts</h3>
      <div>{props.post}</div>
    </div>
  );
}
