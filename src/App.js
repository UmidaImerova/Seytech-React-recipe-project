import './App.css';
import { Routes, Route, Switch as SwitchRouter} from 'react-router-dom'
import Recipe from './components/Recipe';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Recipe/:recipe" element = {<Recipe />}/>       
      </Routes>
    </div>
  );
}

export default App;
