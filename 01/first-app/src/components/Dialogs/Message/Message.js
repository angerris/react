import x from "./Message.module.css";
export function Messages(props) {
  return (
    <div className={x.messages}>
      <div className={x.message}>{props.message}</div>
    </div>
  );
}
