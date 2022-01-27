import logo from './logo.svg';
import './App.css';
import Search from './Components/Search'
import Nav from './Components/Nav'
import Cards from './Components/Cards'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Search/>
      <Cards/>
    </div>
  );
}

export default App;
