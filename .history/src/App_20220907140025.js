import logo from './logo.svg';
import './App.css';
import Apicomp from './api/Apicomp';
import AppMovies from './components/AppMovies';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
    <header>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/gallery'>Gallery</Link>

    </header>
    {/* <Apicomp/> */}
    <AppMovies/>
    </div>
    </Router>
  );
}

export default App;
