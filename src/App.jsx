import './App.css';
import { HeaderContext } from './Context/HeaderContext';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './utils/routes';

function App() {

  const [headers, setHeaders] = useState({
    genre: 'All',
    type: 'Movies & TV Shows'
  });

  return (
    <div className="App bg-[#1E1E1E] min-h-screen">
      <HeaderContext.Provider value={{headers, setHeaders}}>
        <RouterProvider router={router} />
      </HeaderContext.Provider>
    </div>
  );
}

export default App;
