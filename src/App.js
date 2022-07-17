import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maintenance from "./pages/maintenance/Maintenance";
import SnippetsScreen from "./pages/SnippetsScreen/SnippetsScreen";
import SingleSnippetsScreen from "./pages/SingleSnippetsScreen/SingleSnippetsScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Maintenance />
          </Route>

          <Route path="/snippets">
            <SnippetsScreen />
          </Route>

          <Route path="/id">
            <SingleSnippetsScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
