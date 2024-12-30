import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Refresh = ({ setIsAuthenticated }) => {  
  const location = useLocation();
  const navigate = useNavigate();

  // Check if there is a token in localStorage
  useEffect(() => {
    // Check if there is a token in localStorage
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);    // If a token is found, set the user as authenticated
      // If the user is currently on the home, login, or signup page, redirect them to '/home'
      if (
        location.pathname === '/' ||
        location.pathname === '/login' ||
        location.pathname === '/signup'
      ) {
        navigate('/home', { replace: false });  // Navigate to the home page
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
};

export default Refresh;

