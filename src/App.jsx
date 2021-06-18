//Project files
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/style.css";
import ChildrenContainer from "./components/ChildrenContainer";

function App() {
  return (
    <ThemeProvider>
      <ChildrenContainer />
    </ThemeProvider>
  );
}

export default App;
