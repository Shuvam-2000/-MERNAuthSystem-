import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  
  const navigate = useNavigate()
  const [login, setloginUp] = useState({
      email: '',
      password: ''
  })

  const handleChange = (e) => {
      setloginUp({...login, [e.target.name]: e.target.value});
  }

  const submitForm = async (e) => {
      e.preventDefault()
      if (!login.email) {
          toast.error("Please Enter Your Email");
          return;
      } else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(login.email)) {
          toast.error("Invalid Email Address");
          return;
      }
      if (!login.password) {
          toast.error("Please Enter Password");
          return;
      }else if (!/[!@#$%^&*(),.?":{}|<>]/.test(login.password)) {
          toast.error("Password must contain at least one special character");
          return;
      }else {
          setloginUp({
              email: "",
              password: "",        
          })
      }
      try {
          const url = 'https://mernauthsystem-backend.onrender.com/auth/login';
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-type': 'application/json'
              },
              body: JSON.stringify(login)
          });
          const result = await response.json();
          const { success, message, jwtToken, name, error } = result;
          if(success){
              toast.success('Login SuccesFul', message);
              localStorage.setItem('token', jwtToken);
              localStorage.setItem('LoggedInUser: ', name);
              setTimeout(() => {
                  navigate('/home')
              },1000)
          }else if(error){
              const details = error?.details[0].message;
              toast.error(details)
          }else if(!success){
              toast.error('Failed To Login', message)
          }
      } catch (error) {
          toast.error('Login Failed, Please Try Again', error)
      }
      
  }  

  return (
    <div className="container">
      <h1>Login</h1>
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    onChange={handleChange}
                    type="email"
                    name="email" 
                    value={login.email}
                    placeholder="Enter Your Email"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={login.password} 
                    placeholder="Enter Your Password"
                />
            </div>
            <button type="submit">Submit</button>
            <span>Dont Have an Account?
                <Link to='/signup'>SignUp</Link>
            </span>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Login;
