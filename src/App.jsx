import ProtectedRoutes from './Protected Routes/ProtectedRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderContext } from './Context/HeaderContext';
import { UserContext } from './Context/UserContext';
import Profile from './Pages/Profile';
import Player from './Pages/Player';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { useState } from 'react';
import Home from './Pages/Home';
import Root from './Pages/Root';
import './App.css';

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
              <Route element={<ProtectedRoutes value={{currentUser, setCurrentUser}}><Root><Player /></Root></ProtectedRoutes>} path='/movie/:id' />
              <Route element={<Root><Home /></Root>} path='/' />
              <Route element={<Login />} path='/login' />
              <Route element={<Signup />} path='/signup' /> 
              <Route element={<ProtectedRoutes value={{currentUser, setCurrentUser}}><Root><Profile /></Root></ProtectedRoutes>} path='/profile/:userId' />
            </Routes>
          </BrowserRouter>
        </HeaderContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

//<Route element={<ProtectedRoutes><Root><Profile /></Root></ProtectedRoutes>} path='/profile/:userId' />

export default App;