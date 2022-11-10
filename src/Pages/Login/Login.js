import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle} from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const {signIn, googleSignIn} = useContext(AuthContext);
    
    // for redirect means ----- login korar por kono ekta page e jaoya 
    const navigate = useNavigate();
    // location fatching for redirect the user 
    const location = useLocation();
    // And feachig the from
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
       const password = form.password.value;
       
       signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            // error clean
           
            // set redirect page location means kon page e jete chai log in er por
           // navigate('/');
           //navigate(from, {replace: true});
           navigate(from, {replace: true});
                
            
        }) 
        .catch(error => {
            console.error(error)
            
        });
    }

    // google sign in handle 
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully logged in');
        })
        .catch(error => console.error(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#forget" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          
        </div>

        <div>
        <div className='text-center mb-3'>
            <p>Not a member? <Link to='/register' className='text-orange-600 font-bold'>Please Register</Link>  </p>
        </div>
        <div className='text-center mb-3'>
            <p>or sign in with: </p>
        </div>
        <div className=' grid justify-items-center'>
            <FaGoogle  onClick={handleGoogleSignIn}  className='' style={{cursor:'pointer'}}></FaGoogle>
            
        </div>
        </div>
      </form>
    </div>
  </div>
    </div>
    );
};

export default Login;