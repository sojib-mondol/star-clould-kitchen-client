import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {

    const {user} = useContext(AuthContext);
    
    return (
        <div>
          <div className='mb-3'>
            <img alt='profile img' roundedCircle src={user?.photoURL}/>
          </div>
          <h2 className="text-4xl font-bold">{user?.displayName}</h2>
          <p><small>{user?.email}</small></p>
        </div>
    );
};

export default Profile;