import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/Home/Home";
import ListPage from "./Pages/List/List";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ViewMore from "./Pages/ViewMore/ViewMore";
import Categories from "./Categories/Categories";
import CategoriesDetail from "./Categories/CategoriesDetail";
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
          <Route path="/CategoriesDetail">
            <Header />
            <CategoriesDetail />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
