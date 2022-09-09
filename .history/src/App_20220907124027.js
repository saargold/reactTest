import logo from './logo.svg';
import './App.css';
import Apicomp from './api/Apicomp';
import AppMovies from './components/AppMovies';
function App() {
  return (
    <div className="App">
    <Apicomp/>
    <AppMovies/>
    </div>
  );
}

export default App;
