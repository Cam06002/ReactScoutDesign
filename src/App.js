import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home';
import NavBar from './Components/Layout/NavBar';
import Portfolio from './Components/Portfolio';

export default function App() {
  return (
    <div className='App'>
          <NavBar />
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path='/Home' element={<Home />}/>
              <Route path='/Portfolio' element={<Portfolio />}/>
            </Routes>

    </div>
  );
}