import React from 'react';
import person from '../../../assets/aboutUs/person.jpg'

const About = () => {
    return (
        <div className="hero max-w-screen-xl mx-auto px-5 my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className=" text-2xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">We are qualified <br />
                     & of experience <br />
                      in this field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-6">Good & healthy food for necessary needs for every person</p>
                    {/* <button className="btn btn-primary">Get more info</button> */}
                </div>
            </div>
        </div>
    );
};

export default About;