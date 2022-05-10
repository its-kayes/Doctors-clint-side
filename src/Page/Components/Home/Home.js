import React from 'react';
import Banner from './Banner';
import bg from '../../../assets/images/bg.png';
import Info from './Info/Info';
import DentalCare from './DentalCare';

const Home = () => {
    let img = <img src={bg} alt="" />
    return (
        <div>
            <Banner> </Banner>

            <Info> </Info>

            <DentalCare> </DentalCare>

        </div>
    );
};

export default Home;