
import './App.css';
import { BrowserRouter, Route, Switch } from "react-dom";
import Home from "./pages/Home";
import

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/map" component={Map} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
