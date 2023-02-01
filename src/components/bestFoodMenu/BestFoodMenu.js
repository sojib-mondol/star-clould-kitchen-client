import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const BestFoodMenu = () => {
    return (
        <>
            <div className='text-center mt-20'>
                <h4 className='text-xl text-orange-600 font-bold'>BEST FOOD MENU</h4>
                <h2 className='text-4xl mt-2'>Choose Your Best Menus</h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-10 px-10'>
                <div>
                    <div><img src="https://images.unsplash.com/photo-1633016773690-8751791ef019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className="max-w-sm shadow-2xl" alt='food img'/></div>
                </div>
                <div>
                    <div className='grid grid-cols-2 '>
                        <div>
                            <img className='rounded h-32' src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80" alt="Album"/>
                        </div>
                        <div className='pl-2'>
                        
                            <Link to='/'><button className='text-orange-600'>Hamburger $25</button></Link>
                            <p>Roasted langoustine, consommé</p>
                            <p className='flex align-middle items-center text-orange-600'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <span className='text-black'>(5k Reviews)</span></p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-5'>
                        <div>
                            <img className='rounded h-32' src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Album"/>
                        </div>
                        <div className='pl-2'>
                            
                            <Link to='/'><button className='text-orange-600'>Pizza $62</button></Link>
                            <p>Roasted langoustine, consommé</p>
                            <p className='flex align-middle items-center text-orange-600'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <span className='text-black'>(5k Reviews)</span></p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-5'>
                        <div>
                            <img className='rounded h-32' src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Album"/>
                        </div>
                        <div className='pl-2'>
                            <Link to='/'><button className='text-orange-600'>Baked Chicken Wings $125</button></Link>
                            <p>Roasted langoustine, consommé</p>
                            <p className='flex align-middle items-center text-orange-600'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <span className='text-black'>(5k Reviews)</span></p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-5'>
                        <div>
                            <img className='rounded h-32' src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Album"/>
                        </div>
                        <div className='pl-2'>
                            <Link to='/'><button className='text-orange-600'>Seafood Pizza $235</button></Link>
                            <p>Roasted langoustine, consommé</p>
                            <p className='flex align-middle items-center text-orange-600'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <span className='text-black'>(5k Reviews)</span></p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    );
};

export default BestFoodMenu;