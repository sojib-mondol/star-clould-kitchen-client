import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import DetailCard from '../Details/DetailCard';
import Loading from '../Shared/Loading/Loading';

const MyReviews = () => {
    const {loading} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://star-cloud-kitchen-server.vercel.app/addreview')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    if(loading){
        return <Loading></Loading>
    }

    return (
        
        <div>
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

export default MyReviews;