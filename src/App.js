import logo from './logo.svg';
import './App.css';
import { Route, Router, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello World</div>
    },
  ]);

  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ReactProvider router={router} />
    </React.StrictMode>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}
