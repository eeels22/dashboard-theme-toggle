// Project files
import ThemeToggler from "./ThemeToggler";

export default function Header({ theme, onClick }) {
  return (
    <header className="Header">
      <div>
        <h1>Social Media Dashboard</h1>
        <p className="sub-heading">Total Followers: 23,004</p>
        <hr />
      </div>
      <ThemeToggler theme={theme} onClick={onClick} />
    </header>
  );
}
