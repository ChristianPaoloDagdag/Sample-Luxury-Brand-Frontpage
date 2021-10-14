import HomePage from "./components/contents/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewArrivals from "./components/contents/NewArrivals";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/newArrivals">
            <NewArrivals/>
          </Route>

          
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
