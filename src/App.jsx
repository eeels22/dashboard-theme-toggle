// NPM package
import { useState } from "react";

//Project files
import "./styles/style.css";
import Header from "./components/Header";
import OverviewList from "./components/OverviewList";
import toplineData from "./data/topline.json";
import FollowerCard from "./components/FollowerCard";
import Footer from "./components/Footer";

function App() {
  // Local state
  const [theme, setTheme] = useState("light");

  // Constants
  const followerCardArray = toplineData.map((item) => (
    <FollowerCard key={item.id} info={item} />
  ));

  const themeClass = theme === "light" ? "App" : "App dark";

  return (
    <div className={themeClass}>
      <Header theme={theme} onClick={setTheme} />
      <section className="follower-card-section">{followerCardArray}</section>
      <OverviewList />
      <Footer />
    </div>
  );
}

export default App;
