import x from "./Header.module.css";
export default function Header() {
  return (
    <header className={x.header}>
      <img
        src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x300"
        alt=""
        width={50}
      />
    </header>
  );
}
