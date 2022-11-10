import React from 'react';
import { FaGoogle} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
       const password = form.password.value;
       const name = form.name.value;
        const phone = form.phone.value;
       console.log(name, phone, email, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <h1 className="text-5xl font-bold">Please Register</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your full name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" name='phone' placeholder="Enter your phone number" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required/>
          
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          
        </div>

        <div>
        <div className='text-center mb-3'>
            <p>Not a member? <Link to='/login' className='text-orange-600 font-bold'>Please Login</Link>  </p>
        </div>
        <div className='text-center mb-3'>
            <p>or sign in with: </p>
        </div>
        <div className=' grid justify-items-center'>
            <FaGoogle   className='' style={{cursor:'pointer'}}></FaGoogle>
            
        </div>
        </div>
      </form>
    </div>
  </div>
    </div>
    );
};

export default Register;