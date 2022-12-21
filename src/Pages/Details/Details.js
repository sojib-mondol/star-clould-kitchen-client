import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import DetailCard from './DetailCard';

const Details = () => {
    
    const {img, price, title, _id, description} = useLoaderData();
    const {user} = useContext(AuthContext); 

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://star-cloud-kitchen-server.vercel.app/addreview')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    
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
            // for instant add reviews
            setReviews([review, ...reviews])
            form.reset();
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
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
                            <textarea className='border-slate-400 border-solid rounded-lg outline-4 p-4' placeholder='Type your review here' name="review" id="" cols="20" rows="5"></textarea>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add review</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

            <div>
                <div className='text-center mb-4'>
                    <p className="text-2xl font-bold text-lime-600">Reviews</p>
                    <h2 className="text-5xl font-semibold">Our Satefide Users</h2>
                    
                </div>
                <div className='mt-5'>
                    <h2>Total reviews: {reviews.length}</h2>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            reviews.map(review => <DetailCard
                                key={review._id}
                                review={review}
                            ></DetailCard>)
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Details;