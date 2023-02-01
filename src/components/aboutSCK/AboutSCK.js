import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";


const AboutSCK = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-20 px-10'>
            <div>
                <h4 className='text-xl text-orange-600 font-bold'>ABOUT STAR CLOUD KITHEN</h4>
                <h2 className='text-4xl mt-5'>The Best Tasty & <br /> Yamee Food and Chief <br /> Based on Italiano</h2>
                <p className='py-5'>Sit amet consectetur adipiscing elitsue risus mauris quam neque adipiscing phasellus aenean ante orcirat scelerisque enim ut nulla vestibulum velvitae ut at elementum mauris, etiam ornare diame</p>
                <button className="btn px-10 bg-orange-500 border-none hover:bg-orange-700 ">LEARN MORE <span className='pl-5'><AiOutlineArrowRight/></span></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
                <div><img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className=" h-80  shadow-2xl" alt='food img'/></div>
                <div><img src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" className=" h-80 shadow-2xl" alt='food img'/></div>
            </div>
        </div>
    );
};

export default AboutSCK;