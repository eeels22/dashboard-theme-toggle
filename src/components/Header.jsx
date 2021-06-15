// Project files
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  return (
    <header>
      <h1>Social Media Dashboard</h1>
      <p className="sub-heading">Total Followers: 23,004</p>
      <hr />
      <ThemeToggler />
    </header>
  );
}
