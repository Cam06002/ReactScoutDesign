import logo from './logo.svg';
import './App.css';
import { Route, Router, BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

export default function App() {

  return (
      <BrowserRouter>
        <Layout>
          <Router>
            <Route/>
          </Router>
        </Layout>
      </BrowserRouter>
  );
}
