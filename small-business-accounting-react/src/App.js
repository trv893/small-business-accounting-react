import Navbar from './Navbar';
import Main from './Main';
import SearchComponent from './SearchComponent';
import Customers from './Customers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Main />
        <Customers />
      </div>
    </div>
  );
}

export default App;
