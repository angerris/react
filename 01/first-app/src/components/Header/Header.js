import x from "./Header.module.css";
import mainLogo from "./1.svg";
export default function Header() {
  return (
    <header className={x.header}>
      <img src={mainLogo} alt="" width={40} className={x.logo} />
    </header>
  );
}
