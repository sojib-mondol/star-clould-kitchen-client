import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";

const MesterShef = () => {
    return (
        <div className='bg-orange-100'>
            <div class="grid  lg:grid-cols-3 gap-4 mx-10 py-20 my-20">
            <div>
                <h4 className='text-xl text-orange-600 font-bold'>BEST FOOD MENU</h4>
                <h2 className='text-4xl mt-5'>Meet Our <br />
                    Exclusive &  <br /> Master Chefs
                </h2>
                <div className='py-5'>
                    <p className='inline-flex ml-2'><span className='mt-1 mr-2 text-orange-600'> <BsCheckCircleFill/></span>  25 Years of Experience in Restaurant  <br /> Services in USA</p>
                    <p className='inline-flex ml-2'><span className='mt-1 mr-2 text-orange-600'> <BsCheckCircleFill/></span>  Any Kind Of Food Made For Customer <br /> and So Much Yamee $ Testy</p>
                    <p>Sit amet consectetur adipiscing elitsue risus mauris quam adipiscing phasellus aene ante orcirat scelerisque enim ut nulla</p>
                    <button className="btn btn-outline btn-warning mt-5">BECOME A CHEF<span className='pl-5'><AiOutlineArrowRight/></span></button>

                </div>
            </div>
            <div className='col-span-2'>
                <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
                     <div><img src="https://images.unsplash.com/photo-1574966740637-12c84035a4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className=" max-h-72 shadow-2xl" alt='mester shef'/></div>
                     <div><img src="https://images.unsplash.com/photo-1574966740637-12c84035a4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className=" max-h-72 shadow-2xl" alt='mester shef'/></div>
                     <div><img src="https://images.unsplash.com/photo-1574966740637-12c84035a4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className=" max-h-72 shadow-2xl" alt='mester shef'/></div>
                     <div><img src="https://images.unsplash.com/photo-1574966740637-12c84035a4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className=" max-h-72 shadow-2xl" alt='mester shef'/></div>
                     <div><img src="https://images.unsplash.com/photo-1574966740637-12c84035a4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className=" max-h-72 shadow-2xl" alt='mester shef'/></div>
                     <div><img src="https://images.unsplash.com/photo-1574966740637-12c84035a4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className=" max-h-72 shadow-2xl" alt='mester shef'/></div>
                     
                </div>
            </div>
        </div>
        </div>
    );
};

export default MesterShef;