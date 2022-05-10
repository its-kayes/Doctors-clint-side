import React from 'react';
import Banner from './Banner';
import bg from '../../../assets/images/bg.png';
import Info from './Info/Info';

const Home = () => {
    let img = <img src={bg} alt="" />
    return (
        <div>
            <Banner> </Banner>

            <Info> </Info>

        </div>
    );
};

export default Home;