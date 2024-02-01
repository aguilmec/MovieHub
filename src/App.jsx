import './App.css';
import Home from './Pages/Home';
import Player from './Pages/Player';
import { HeaderContext } from './Context/HeaderContext';
import { useState } from 'react';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

function App() {

  const [headers, setHeaders] = useState({
    genre: 'All',
    type: 'Movies & TV Shows'
  });

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/movie?',
      element:<Player />
    }
  ]);

  return (
    <div className="App bg-[#1E1E1E]">
      <HeaderContext.Provider value={{headers, setHeaders}}>
        <RouterProvider router={router} />
      </HeaderContext.Provider>
    </div>
  );
}

export default App;
