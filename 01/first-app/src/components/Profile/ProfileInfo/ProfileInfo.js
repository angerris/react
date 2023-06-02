import x from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  return (
    <div className={x.description}>
      <img
        src="https://media.istockphoto.com/id/1207543928/photo/background-bokeh-png-for-background-use.jpg?s=170667a&w=0&k=20&c=5-7bJxdAI0t4FNTBorEYA-ZaFNQ7XoJfWr83TPla_YY="
        alt=""
        className={x.img}
      />
      <div>ava + description</div>
    </div>
  );
}
