import "./App.css";
import { RouteJS } from "./components/Routes";
import "./scss/main.scss";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <RouteJS />
    </>
  );
}

export default App;
