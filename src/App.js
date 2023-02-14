import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home';

export default function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}