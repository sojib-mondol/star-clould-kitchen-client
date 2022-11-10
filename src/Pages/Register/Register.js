import React, { useContext} from 'react';
import toast from 'react-hot-toast';
import { FaGoogle} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser, googleSignIn, updateUserProfile} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
       const password = form.password.value;
       const name = form.name.value;
       const photoURL = form.photo.value;
       console.log(name, photoURL, email, password);

       if (password.length < 6) {
        alert('Password should be 6 characters or more.');
        return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            // error clean
            
            // user info update
            handleUpdateUserProfile(name, photoURL);
           
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

     // updating the user profile
     const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name, 
            photoURL: photoURL 
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
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
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" name='photo' placeholder="Enter your photo url" className="input input-bordered" />
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
            <FaGoogle onClick={handleGoogleSignIn}  className='' style={{cursor:'pointer'}}></FaGoogle>
            
        </div>
        </div>
      </form>
    </div>
  </div>
    </div>
    );
};

export default Register;