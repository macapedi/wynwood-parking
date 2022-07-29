
import './MapPage.css';

function MapPage() {
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

export default MapPage;
