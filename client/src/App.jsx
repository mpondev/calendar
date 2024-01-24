import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CalContainer from './components/CalContainer/CalContainer';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CalContainer />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
