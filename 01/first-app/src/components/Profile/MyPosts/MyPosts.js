import x from "./MyPosts.module.css";
import Post from "./Post/Post";
export default function MyPosts() {
  let postsData = [
    { id: 1, message: "hi", likeCount: 0 },
    { id: 1, message: "wassup", likeCount: 2 },
  ];
  return (
    <div className={x.MyPosts}>
      <div>my posts</div>
      <div>new post</div>
      <div>
        <textarea cols="20" rows="5"></textarea>
        <button>add post</button>
      </div>
      <div className={x.posts}>
        <Post
          message={postsData[0].message}
          likeCount={postsData[0].likeCount}
        />
        <Post
          message={postsData[1].message}
          likeCount={postsData[1].likeCount}
        />
      </div>
    </div>
  );
}
