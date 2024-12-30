import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Refresh from './pages/Refresh';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to='/login' />;
  };

  return (
    <>
      <BrowserRouter>
        <Refresh setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/home' element={<PrivateRoute element={<Home />} />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
