//Project files
import { useTheme } from "../context/ThemeContext";
import Header from "./Header";
import OverviewList from "./OverviewList";
import toplineData from "../data/topline.json";
import FollowerCard from "../components/FollowerCard";
import Footer from "./Footer";

export default function ChildrenContainer() {
  const darkTheme = useTheme();
  console.log("logging dark theme from App", darkTheme);

  // Constants
  const followerCardArray = toplineData.map((item) => (
    <FollowerCard key={item.id} info={item} />
  ));

  const themeClass = darkTheme ? "App dark" : "App";

  return (
    <div className={themeClass}>
      <div className="container">
        <Header />
        <section className="card-section">{followerCardArray}</section>
        <OverviewList />
      </div>
      <Footer />
    </div>
  );
}
