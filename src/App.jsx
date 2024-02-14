import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './Context/UserContext';
import { HeaderContext } from './Context/HeaderContext';
import ProtectedRoutes from './Protected Routes/ProtectedRoutes';
import Player from './Pages/Player';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Root from './Pages/Root';

function App() {

  const [headers, setHeaders] = useState({
    genre: 'All',
    type: 'Movies & TV Shows'
  });

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App bg-[#1E1E1E] min-h-screen">
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <HeaderContext.Provider value={{headers, setHeaders}}>
          <BrowserRouter>
            <Routes>
              <Route path='/movie/:id'  element={<ProtectedRoutes><Root><Player /></Root></ProtectedRoutes>} />
              <Route element={<Root><Home /></Root>} path='/' />
              <Route element={<Login />} path='/login' />
              <Route element={<Signup />} path='/signup' /> 
            </Routes>
          </BrowserRouter>
        </HeaderContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;


/*<div className="App bg-[#1E1E1E] min-h-screen">
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <HeaderContext.Provider value={{headers, setHeaders}}>
          <RouterProvider router={router} />
        </HeaderContext.Provider>
      </UserContext.Provider>
      
    </div>*/