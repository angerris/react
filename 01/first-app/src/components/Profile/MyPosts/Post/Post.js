import x from "./Post.module.css";
export default function Post(props) {
  return (
    <div className={x.postWrapper}>
      <img
        src="https://w7.pngwing.com/pngs/574/369/png-transparent-avatar-computer-icons-user-random-icons-purple-blue-heroes.png"
        alt=""
        srcset=""
        width={50}
      />
      <div className={x.post}>{props.message}</div>
      <div>
        <div className={x.like}>like {props.likeCount}</div>
      </div>
    </div>
  );
}
