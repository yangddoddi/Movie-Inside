import { Route, Switch, Link, BrowserRouter } from "react-router-dom";

import "./App.css";

import { Main } from "./routes/main";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      {Route path="/"}
      <Main />
      {/Route}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
