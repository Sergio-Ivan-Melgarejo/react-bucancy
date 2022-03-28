import './App.css';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './page/Home';
import ErrorPage from './page/ErrorPage';

function App() {
  return (
    <main className="App dark">
      
      <HashRouter>
        {/* cambiar por un nav */}
        <NavLink to="/" className={({isActive})=>(isActive ? "link active" : "link")}>Home</NavLink>
        <NavLink to="/otrolado" className={({isActive})=>(isActive ? "link active" : "link")}>adsdas</NavLink>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/song" element={<Home/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>

      </HashRouter>
    </main>
  );
}

export default App;
