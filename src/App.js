import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home';
import NavBar from './Components/Layout/NavBar';
import Portfolio from './Components/Portfololio/Portfolio';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import GradeBook from './Components/Gradebook/Gradebook';

export default function App() {
  return (
    <div className='App'>
          <NavBar />
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path='/Home' element={<Home />}/>
              <Route path='/Portfolio' element={<Portfolio />}/>
              <Route path='/GradeBook' element={<GradeBook/>}/>
            </Routes>

    </div>
  );
}