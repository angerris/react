import x from "./Post.module.css";
import pfp from "./../../../../assets/profpic.avif";
export default function Post(props) {
  return (
    <div className={x.postWrapper}>
      <img src={pfp} alt="" srcset="" width={50} />
      <div className={x.post}>{props.message}</div>
      <div>
        <div className={x.like}>like {props.likeCount}</div>
      </div>
    </div>
  );
}
