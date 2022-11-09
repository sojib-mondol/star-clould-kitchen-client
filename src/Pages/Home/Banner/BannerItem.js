import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css'

const BannerItem = ({slide}) => {

    const {image, id, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt=""  className=" w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Good Food <br />
                        for Better Life <br />
                        & Helth 
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-1/2">
                    <p className='text-white text-xl'>Today's notions of “health and wellness” go beyond nutrition and even beyond food to embrace the health of the planet and the good of society.</p>
                </div>

                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                    <Link to='/main-dishes'><button className="btn btn-outline btn-warning ">Our Main dishes</button>
                    </Link>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>  
    );
};

export default BannerItem;