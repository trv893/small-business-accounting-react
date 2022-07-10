import Navbar from './Navbar';
import Main from './Main';
import SearchComponent from './SearchComponent';
import Customers from './components/customers/Customers';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Invoices from './components/invoices/Invoices';
import Proposals from './components/proposals/Proposals';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/customers">
              <Customers />
            </Route>
            <Route path="/invoices">
              <Invoices />
            </Route>
            <Route path="/proposals">
              <Proposals />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
