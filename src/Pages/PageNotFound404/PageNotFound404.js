import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound404 = () => {
    return (
        <div>
            <h2>404 Page not found. Please go back <Link className='text-blue-600' to='/'>Home</Link></h2>
        </div>
    );
};

export default PageNotFound404;