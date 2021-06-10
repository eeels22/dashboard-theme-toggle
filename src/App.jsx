//Project files
import "./styles/style.css";
import Header from "./components/Header";
import OverviewList from "./components/OverviewList";
import toplineData from "./data/topline.json";
import FollowerCard from "./components/FollowerCard";

function App() {
  // Constants
  const followerCardArray = toplineData.map((item) => (
    <FollowerCard key={item.id} info={item} />
  ));

  return (
    <div className="App">
      <Header />
      <section>{followerCardArray}</section>
      <OverviewList />
      <footer class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/eeels22">En-Chi Liu</a>.
      </footer>
    </div>
  );
}

export default App;
