
import './App.css';
import Movie from './components/Movie'
import NavBar from './components/NavBar'
import {Route,Routes} from 'react-router-dom'
import {Movies} from './components/Data'
import Details from './components/Details'
function App() {
  return (
    <div className="App">
     <NavBar />

     
    <Routes>
      <Route exact path='/' element={<Movie/>}/>
      <Route path='/Details/:id' element={<Details List={Movies}/>}/>
    </Routes>

    </div>
  );
}

export default App;
