import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home';
import NavBar from './Components/Layout/NavBar';

export default function App() {
  return (
    <div className='App'>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home />}/>
            </Routes>

    </div>
  );
}