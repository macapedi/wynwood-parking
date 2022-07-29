
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Map from "./pages/MapPage/MapPage";
import Header from "./components/Header/Header";
import ResponsiveAppBar from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/map" component={Map} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
