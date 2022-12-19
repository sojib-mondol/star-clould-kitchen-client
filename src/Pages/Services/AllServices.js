import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import ServicesCard from './ServicesCard';

const AllServices = () => {
    const {loading} = useContext(AuthContext);
    const [services, setSevices] = useState([]);
    useEffect(() => {
        fetch('https://star-cloud-kitchen-server.vercel.app/main-dishes')
        .then(res => res.json())
        .then(data => setSevices(data))
    }, [])

    if(loading){
        return <Loading></Loading>
    }
    console.log("lofffffffffffffddddddddddddddiiiiiiiiiiinngg",loading)

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h2 className="text-5xl font-semibold">Our Main Dishes</h2>
            </div>
            <div>
                {/* <h2>services: {services.length}</h2> */}
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service={service}
                        ></ServicesCard>)
                    }
                </div>
            </div>
            {/* <Link to='main-dishes'><button>See more</button></Link> */}
        </div>
    );
};

export default AllServices;