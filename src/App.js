import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/Home/Home";
import ListPage from "./Pages/List/List";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ViewMore from "./Pages/ViewMore/ViewMore";
import Categories from "./Categories/Categories";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Landing">
            <Header />
            <Landing />
            <Footer />
          </Route>
          <Route path="/ListPage">
            <Header />
            <ListPage />
            <Footer />
          </Route>
          <Route path="/ViewMore">
            <Header />
            <ViewMore />
            <Footer />
          </Route>
          <Route path="/Categories">
            <Header />
            <Categories />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
