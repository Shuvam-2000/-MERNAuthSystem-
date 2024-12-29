import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

const SignUp = () => {

    const navigate = useNavigate()
    const [signUp, setsignUp] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setsignUp({...signUp, [e.target.name]: e.target.value});
    }

    const submitForm = async (e) => {
        e.preventDefault()
        if(!signUp.name){
            toast.error('Please Enter Your Name');
            return;
        }
        if (!signUp.email) {
            toast.error("Please Enter Your Email");
            return;
        }else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(signUp.email)) {
            toast.error("Invalid Email Address");
            return;
        }
        if (!signUp.password) {
            toast.error("Please Enter Password");
            return;
        }else if (!/[!@#$%^&*(),.?":{}|<>]/.test(signUp.password)) {
            toast.error("Password must contain at least one special character");
            return;
        }else {
            setsignUp({
                name: "",
                email: "",
                password: "",        
            })
        }
        try {
            const url = 'http://localhost:8080/auth/signup';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(signUp)
            });
            const result = await response.json();
            // console.log(result); // debugging
            const { success, message, error } = result;
            if(success){
                toast.success('Sign Up SuccesFull', message);
                setTimeout(() => {
                    navigate('/login')
                },1000)
            }else if(error){
                const details = error?.details[0].message;
                toast.error(details)
            }else if(!success){
                toast.error('User Already Exists', message)
            }
        } catch (error) {
            toast.error('SignUp Failed', error)
        }
        
    }  

  return (
    <div className="container">
      <h1>SignUp</h1>
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    onChange={handleChange}
                    type="text"
                    name="name" 
                    value={signUp.name}
                    placeholder="Enter Your Name"
                    autoFocus
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    onChange={handleChange}
                    type="email"
                    name="email" 
                    value={signUp.email}
                    placeholder="Enter Your Email"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={signUp.password} 
                    placeholder="Enter Your Password"
                />
            </div>
            <button type="submit">Submit</button>
            <span>Already Have an Account?
                <Link to='/login'>Login</Link>
            </span>
        </form>
        <ToastContainer />
    </div>
  )
}

export default SignUp;
