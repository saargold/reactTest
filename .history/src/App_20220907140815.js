import logo from './logo.svg';
import './App.css';
import Apicomp from './api/Apicomp';
import AppMovies from './components/AppMovies';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom'
import Gallery from './components/Gallery';
import About from './components/About';
import Home from './components/Home';
import VipList from './components/VipList';
function App() {
  return (
    <Router>
    <div className="App text-center">
    <header>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/gallery'>Gallery</Link>
      <Link to='/vip'>Vip List</Link>

    </header>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/gallery" component={Gallery}></Route>
    <Route exact path="/vip" component={VipList}></Route>

    </Switch>
    {/* <Apicomp/> */}
    {/* <AppMovies/> */}
    </div>
    </Router>
  );
}

export default App;
