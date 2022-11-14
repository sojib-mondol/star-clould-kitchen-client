import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const {img, price, title, _id, description} = useLoaderData();
    return (
        <div >
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">${price}</h2>

                    <p>{description}</p>
                    
                </div>
            </div>
            {/* thia is for add revies */}
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
    
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Details;