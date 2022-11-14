import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Details = () => {
    const {img, price, title, _id, description} = useLoaderData();
    const {user} = useContext(AuthContext); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewMsg = form.review.value;
        const review = {
            userId: user.uid,
            userName: user.displayName,
            userImg: user.photoURL,
            serviceId: _id,
            serviceName: title,
            reviewMsg: reviewMsg
        }
        //console.log(review);

        fetch('https://star-cloud-kitchen-server.vercel.app/addreview', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(review),
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Successfully added.')
            form.reset();
        })
        .catch(err => console.log(err))
    }
    return (
        <div >
           <Toaster />
            <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure><img src={img} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">${price}</h2>

                    <p>{description}</p>
                    
                </div>
            </div>
            {/* thia is for add revies */}
            <div className="">
            <div className="container mt-5">
            {/*  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 */}
                <div className="card">
                <form onSubmit={handleSubmit} className="card-body shadow-xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-bold">Please add a review</span>
                        </label>
                        <textarea className='border-slate-400 border-solid outline-4 p-4' placeholder='Type your review here' name="review" id="" cols="30" rows="10"></textarea>
                    </div>
                    
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Add review</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Details;