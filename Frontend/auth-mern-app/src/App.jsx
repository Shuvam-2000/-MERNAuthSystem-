import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
// import { useState } from 'react';
import './App.css'

function App() {

  // const [ isAuthenticated, setisAunthenticated ] = useState(false)
  // const PrivateRoute = ((e) => {
  //   return isAuthenticated ? e : <Navigate to='/login' />
  // })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          {/* <Route path='/home' element={<PrivateRoute element={<Home />} />} /> */}
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
