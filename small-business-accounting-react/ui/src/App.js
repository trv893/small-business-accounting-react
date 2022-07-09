import Navbar from './Navbar';
import Main from './Main';
import SearchComponent from './SearchComponent';
import Customers from './components/customers/Customers';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Customers />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
