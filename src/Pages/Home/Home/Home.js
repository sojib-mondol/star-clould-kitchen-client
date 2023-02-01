import React from 'react';
import AboutSCK from '../../../components/aboutSCK/AboutSCK';
import BestCategory from '../../../components/bestCategory/BestCategory'
import BestFoodMenu from '../../../components/bestFoodMenu/BestFoodMenu';
import MesterShef from '../../../components/mesterShef/MesterShef';
import Services from '../../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <Services></Services>
            <BestCategory></BestCategory>
            <AboutSCK></AboutSCK>
            <BestFoodMenu></BestFoodMenu>
            <MesterShef></MesterShef>
            <About></About>
            
            
        </div>
    );
};

export default Home;