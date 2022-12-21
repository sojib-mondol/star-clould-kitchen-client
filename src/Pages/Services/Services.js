import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import ServicesCard from './ServicesCard';

const Services = () => {

    const {loading} = useContext(AuthContext);
    const [services, setSevices] = useState([]);
    useEffect(() => {
        fetch('https://star-cloud-kitchen-server.vercel.app/main-dishes3')
        .then(res => res.json())
        .then(data => setSevices(data))
    }, [])

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Service</p>
                <h2 className="text-5xl font-semibold">Our Main Dishes</h2>
                <p>We give a good qualitiful food for having a good health.</p>
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
            <div className='mt-4 grid'>
                <Link className=' justify-self-center' to='main-dishes '><button className="btn px-10 bg-orange-500 border-none hover:bg-orange-700 ">See All</button></Link>
            </div>
        </div>
    );
};

export default Services;