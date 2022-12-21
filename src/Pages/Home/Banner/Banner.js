import React from 'react';
import img1 from '../../../assets/bannerimg/img1.jpg'
import img2 from '../../../assets/bannerimg/img2.jpg'
import img3 from '../../../assets/bannerimg/img3.jpg'



import BannerItem from './BannerItem';


const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    }
]



const Banner = () => {
    return (
        <div className="carousel max-w-screen-xl mx-auto w-full py-10">
            
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
    );
};

export default Banner;