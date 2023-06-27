import { Field, Form, Formik } from "formik";
import x from "./MyPosts.module.css";
export default function MyPostsForm(props) {
  return (
    <Formik
      initialValues={{
        post: "",
      }}
      onSubmit={() => {
        props.addPost();
      }}
    >
      <Form>
        <div>my posts</div>
        <Field
          value={props.newPostText}
          component="textarea"
          name="post"
          type="text"
          onChange={props.onPostChange}
          placeholder="add new post..."
        />
        <button type="submit">add post!</button>
        <div className={x.posts}>{props.postElements}</div>
      </Form>
    </Formik>
  );
}
