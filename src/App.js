import './App.css';
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import SearchList from "./components/SearchList/searchList";
import FilterList from "./components/FilterList/filterList";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/search" exact>
            <SearchList/>
          </Route>
          <Route path="/filter" exact>
            <FilterList/>
          </Route>
        </Switch>
      </Navbar>
    </Router>
  );
}

export default App;
